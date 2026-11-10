package io.github.zxymiku.persistnotify;

import android.content.Context;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 默认通知内容：两个C语言题库中全部题目的完整答案。
 * 内容存放在 res/raw/default_answers.txt，随应用打包。
 */
public final class Defaults {

    private Defaults() {
    }

    public static String loadDefaultText(Context context) {
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                context.getResources().openRawResource(R.raw.default_answers), "UTF-8"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        } catch (IOException e) {
            return context.getString(io.github.zxymiku.persistnotify.R.string.empty_notice);
        }
        return sb.toString();
    }
}
