package io.github.zxymiku.persistnotify;

import android.Manifest;
import android.app.NotificationManager;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

/**
 * 主界面：明日方舟风格 UI。
 * 功能：编辑通知内容（字数不限）、部署/更新/关闭持久通知。
 */
public class MainActivity extends AppCompatActivity {

    private static final String PREFS = NotifyService.PREFS;
    private static final String KEY_TEXT = NotifyService.KEY_TEXT;
    private static final String KEY_ENABLED = NotifyService.KEY_ENABLED;

    private EditText inputText;
    private TextView statusValue;
    private TextView charCount;

    /** 记录是否在权限授予后需要立即部署通知 */
    private boolean pendingDeploy = false;

    private final ActivityResultLauncher<String> permissionLauncher =
            registerForActivityResult(new ActivityResultContracts.RequestPermission(), granted -> {
                if (granted && pendingDeploy) {
                    pendingDeploy = false;
                    deployNotification();
                } else if (!granted) {
                    pendingDeploy = false;
                    statusValue.setText(R.string.status_no_permission);
                    statusValue.setTextColor(ContextCompat.getColor(this, R.color.danger));
                }
            });

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        inputText = findViewById(R.id.input_text);
        statusValue = findViewById(R.id.status_value);
        charCount = findViewById(R.id.char_count);
        Button btnDeploy = findViewById(R.id.btn_deploy);
        Button btnUpdate = findViewById(R.id.btn_update);
        Button btnClose = findViewById(R.id.btn_close);

        SharedPreferences sp = getSharedPreferences(PREFS, MODE_PRIVATE);
        String saved = sp.getString(KEY_TEXT, null);
        if (saved == null) {
            saved = Defaults.loadDefaultText(this);
        }
        inputText.setText(saved);
        inputText.setSelection(saved.length());

        inputText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                charCount.setText(getString(R.string.char_count_fmt, s.length()));
            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        });
        charCount.setText(getString(R.string.char_count_fmt, saved.length()));

        btnDeploy.setOnClickListener(v -> {
            saveText();
            if (!hasNotificationPermission()) {
                pendingDeploy = true;
                permissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS);
                return;
            }
            deployNotification();
        });

        btnUpdate.setOnClickListener(v -> {
            saveText();
            if (hasNotificationPermission()) {
                Intent intent = new Intent(this, NotifyService.class);
                intent.setAction(NotifyService.ACTION_UPDATE);
                ContextCompat.startForegroundService(this, intent);
                refreshStatus();
            } else {
                statusValue.setText(R.string.status_no_permission);
                statusValue.setTextColor(ContextCompat.getColor(this, R.color.danger));
            }
        });

        btnClose.setOnClickListener(v -> closeNotification());

        refreshStatus();
    }

    private boolean hasNotificationPermission() {
        if (Build.VERSION.SDK_INT >= 33) {
            return ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS)
                    == PackageManager.PERMISSION_GRANTED;
        }
        NotificationManager nm = getSystemService(NotificationManager.class);
        return nm.areNotificationsEnabled();
    }

    private void saveText() {
        SharedPreferences sp = getSharedPreferences(PREFS, MODE_PRIVATE);
        sp.edit().putString(KEY_TEXT, inputText.getText().toString()).apply();
    }

    private void deployNotification() {
        saveText();
        Intent intent = new Intent(this, NotifyService.class);
        intent.setAction(NotifyService.ACTION_START);
        ContextCompat.startForegroundService(this, intent);
        getSharedPreferences(PREFS, MODE_PRIVATE)
                .edit().putBoolean(KEY_ENABLED, true).apply();
        refreshStatus();
    }

    private void closeNotification() {
        getSharedPreferences(PREFS, MODE_PRIVATE)
                .edit().putBoolean(KEY_ENABLED, false).apply();
        stopService(new Intent(this, NotifyService.class));
        NotificationManager nm = getSystemService(NotificationManager.class);
        nm.cancel(NotifyService.NOTIFICATION_ID);
        refreshStatus();
    }

    private void refreshStatus() {
        boolean enabled = getSharedPreferences(PREFS, MODE_PRIVATE)
                .getBoolean(KEY_ENABLED, false);
        if (enabled) {
            statusValue.setText(R.string.status_active);
            statusValue.setTextColor(ContextCompat.getColor(this, R.color.ak_yellow));
        } else {
            statusValue.setText(R.string.status_standby);
            statusValue.setTextColor(ContextCompat.getColor(this, R.color.text_dim));
        }
    }
}
