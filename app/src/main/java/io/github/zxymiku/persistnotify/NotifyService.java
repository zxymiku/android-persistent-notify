package io.github.zxymiku.persistnotify;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ServiceInfo;
import android.os.Build;
import android.os.IBinder;
import androidx.core.app.NotificationCompat;

/**
 * 前台服务：负责在通知栏持续展示一条持久化通知。
 * 通知文本保存在 SharedPreferences 中，可由 MainActivity 更新。
 * 只有在应用内点击“关闭通知”后才会消失；设备重启后由 BootReceiver 恢复。
 */
public class NotifyService extends Service {

    public static final String CHANNEL_ID = "persist_notify_channel";
    public static final int NOTIFICATION_ID = 1001;
    public static final String ACTION_START = "io.github.zxymiku.persistnotify.action.START";
    public static final String ACTION_UPDATE = "io.github.zxymiku.persistnotify.action.UPDATE";
    public static final String PREFS = "persist_notify_prefs";
    public static final String KEY_TEXT = "notification_text";
    public static final String KEY_ENABLED = "notification_enabled";

    @Override
    public void onCreate() {
        super.onCreate();
        createChannel();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        String action = intent != null ? intent.getAction() : ACTION_START;
        String text = loadText();
        startAsForeground(text);
        if (ACTION_UPDATE.equals(action)) {
            refreshNotification(text);
        }
        return START_STICKY;
    }

    private void startAsForeground(String text) {
        Notification notification = buildNotification(text);
        if (Build.VERSION.SDK_INT >= 29) {
            startForeground(NOTIFICATION_ID, notification,
                    ServiceInfo.FOREGROUND_SERVICE_TYPE_SPECIAL_USE);
        } else {
            startForeground(NOTIFICATION_ID, notification);
        }
    }

    private void refreshNotification(String text) {
        NotificationManager nm = getSystemService(NotificationManager.class);
        nm.notify(NOTIFICATION_ID, buildNotification(text));
    }

    private void createChannel() {
        NotificationChannel channel = new NotificationChannel(
                CHANNEL_ID,
                "持久通知",
                NotificationManager.IMPORTANCE_LOW);
        channel.setDescription("持续显示用户自定义的通知内容");
        channel.setShowBadge(false);
        NotificationManager nm = getSystemService(NotificationManager.class);
        nm.createNotificationChannel(channel);
    }

    private Notification buildNotification(String text) {
        Intent openIntent = new Intent(this, MainActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(
                this, 0, openIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        String shown = text == null || text.trim().isEmpty()
                ? getString(R.string.empty_notice) : text;

        return new NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_notify)
                .setContentTitle(getString(R.string.notif_title))
                .setStyle(new NotificationCompat.BigTextStyle()
                        .bigText(shown))
                .setOngoing(true)
                .setSilent(true)
                .setOnlyAlertOnce(true)
                .setContentIntent(pendingIntent)
                .setPriority(NotificationCompat.PRIORITY_LOW)
                .setCategory(NotificationCompat.CATEGORY_PROGRESS)
                .build();
    }

    private String loadText() {
        SharedPreferences sp = getSharedPreferences(PREFS, MODE_PRIVATE);
        if (!sp.contains(KEY_TEXT)) {
            return Defaults.loadDefaultText(this);
        }
        return sp.getString(KEY_TEXT, "");
    }

    @Override
    public void onDestroy() {
        stopForeground(STOP_FOREGROUND_REMOVE);
        NotificationManager nm = getSystemService(NotificationManager.class);
        nm.cancel(NOTIFICATION_ID);
        super.onDestroy();
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
