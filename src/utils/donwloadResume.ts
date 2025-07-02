export const onDownload = () => {
    fetch("/Atharv_Bhasme_Resume.pdf") // public folder path
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.blob();
        })
        .then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = fileURL;
            a.download = "Atharv_Bhasme_Resume.pdf"; // Only filename here
            document.body.appendChild(a); // Append required for Firefox
            a.click();
            document.body.removeChild(a); // Cleanup
            window.URL.revokeObjectURL(fileURL); // Free memory
        })
        .catch((err) => {
            console.error("Download failed:", err);
        });
};