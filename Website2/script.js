function setEventForWindow(){
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        const app = document.querySelector(".app")
        const HeaderHeight = header.offsetHeight
        const firstSection = document.querySelector(".offer_content");
        const firstSectionOffset = firstSection.offsetHeight;
        const width = header.offsetWidth;
        const headerOffset = header.offsetParent; // Position of header from the top
        const scrollPosition = window.scrollY;
        // Add a fixed position style to the header once it's scrolled past its original position
        if (scrollPosition >= firstSectionOffset - 110) {
          header.style.position = 'fixed'; // Make it fixed once it's scrolled past
          header.style.top = '0';
          header.style.justifyContent = 'center';
          header.style.left = '0';
          header.style.zIndex = '10';
        } else {
          header.style.position = 'sticky'; // Revert to sticky when back to top
          header.style.top = ''; // Reset top to default
          header.style.justifyContent = 'space-between';
        }
    });
}
setEventForWindow();

window.addEventListener('resize', () => {
    setEventForWindow()
})
