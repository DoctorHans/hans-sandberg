// Create a reference to the document root (HTML element)
const THEME_OWNER: HTMLElement = document.documentElement;

// Create a storage key for the user's preferred theme
const THEME_STORAGE_KEY: string = "theme";

// Retrieve the preferred theme from local storage
const cachedTheme = localStorage.getItem(THEME_STORAGE_KEY);

// Check if local storage contains a prefered theme
if (cachedTheme) {
    // Store the cached theme in the document root's dataset
    THEME_OWNER.dataset[THEME_STORAGE_KEY] = cachedTheme;
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Search for the theme-picker and store it if found
    const themePicker = document.getElementById("theme-picker");

    // Exit the function if the theme-picker can't be found
    if (!themePicker) return;

    // Set the initial theme to the theme stored in cache or, if the cache is empty, to "system"
    const initialTheme = cachedTheme ?? "system";

    // Find the theme that's checked and uncheck it
    themePicker?.querySelector("input[checked]")?.removeAttribute("checked");

    // Find the option that matches the initial theme and check it
    themePicker?.querySelector(`input[value="${initialTheme}"]`)?.setAttribute("checked", "");

    // Detect changes to the theme-picker
    themePicker.addEventListener("change", (e) => {

        // Store the new theme
        const theme = (e.target as HTMLInputElement)?.value;

        // Check if the new theme is "system"
        if (theme === "system") {
            // Remove the key storing the preferred theme from the document root's dataset 
            delete THEME_OWNER.dataset[THEME_STORAGE_KEY];

            // Remove the previous theme stored in localStorage
            localStorage.removeItem(THEME_STORAGE_KEY);
        } else {
            // Store the new theme in the document root's dataset
            THEME_OWNER.dataset[THEME_STORAGE_KEY] = theme;

            // Store the selected theme in localStorage
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        }
    })
})

