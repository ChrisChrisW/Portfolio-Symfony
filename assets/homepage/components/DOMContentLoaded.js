export default async function DOMContentLoaded() {
    await document.addEventListener('DOMContentLoaded', () => {
        // Select elements by their data attribute
        const entryElements =
            document.querySelectorAll('[data-homepage]');

        // Map over each element and extract the data value
        const entryObjects =
            Array.from(entryElements).map(
                item => JSON.parse(item.dataset.videoElement)
            );

        return entryObjects[0];
    });
}