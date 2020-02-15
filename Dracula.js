/**
 * Dracula theme for Blink shell.
 * https://github.com/hwyncho/Dracula-Blink.git
 *
 * Last updated by hwyncho on 2020. 02. 15.
 */
BLACK = "#000000";
RED = "#FF6D67";
GREEN = "#59F68D";
YELLOW = "#F3F89D";
BLUE = "#C9A8FA";
MAGENTA = "#FF92D0";
CYAN = "#99ECFD";
WHITE = "#C7C7C7";
BRIGHT_BLACK = "#676767";
BRIGHT_RED = "#FF6D67";
BRIGHT_GREEN = "#59F68D";
BRIGHT_YELLOW = "#F3F89D";
BRIGHT_BLUE = "#C9A8FA";
BRIGHT_MAGENTA = "#FF92D0";
BRIGHT_CYAN = "#99ECFD";
BRIGHT_WHITE = "#ECEEF4";
FOREGROUND = "#EAEAEA";
BACKGROUND = "#272936";
CURSOR = "rgba(199,199,199,1.0)";

t.prefs_.set("color-palette-overrides", [
    BLACK,
    RED,
    GREEN,
    YELLOW,
    BLUE,
    MAGENTA,
    CYAN,
    WHITE,
    BRIGHT_BLACK,
    BRIGHT_RED,
    BRIGHT_GREEN,
    BRIGHT_YELLOW,
    BRIGHT_BLUE,
    BRIGHT_MAGENTA,
    BRIGHT_CYAN,
    BRIGHT_WHITE,
]);
t.prefs_.set("foreground-color", FOREGROUND);
t.prefs_.set("background-color", BACKGROUND);
t.prefs_.set("cursor-color", CURSOR);