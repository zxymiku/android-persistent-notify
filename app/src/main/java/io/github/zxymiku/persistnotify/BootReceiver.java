package io.github.zxymiku.persistnotify;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

/**
 * 开机自启：若用户在应用内开启了持久通知，则开机后自动恢复通知。
 */
public class BootReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        if (!Intent.ACTION_BOOT_COMPLETED.equals(intent.getAction())) {
            return;
        }
        SharedPreferences sp = context.getSharedPreferences(NotifyService.PREFS, Context.MODE_PRIVATE);
        boolean enabled = sp.getBoolean(NotifyService.KEY_ENABLED, false);
        if (enabled) {
            Intent service = new Intent(context, NotifyService.class);
            service.setAction(NotifyService.ACTION_START);
            context.startForegroundService(service);
        }
    }
}
