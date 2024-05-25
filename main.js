document.addEventListener("DOMContentLoaded", function() {

    let tabs = document.getElementsByClassName('tab');
    Array.from(tabs).forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            let currentTab = tab.getAttribute('href');
            Array.from(document.getElementsByClassName('tabContent')).forEach(function(content) {
                content.style.display = 'none'; 
            });
            document.querySelector(currentTab).style.display = 'block';
        });
    });

    if (tabs.length > 0) {
        tabs[0].click();
    }

    document.getElementById('toggleButton').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});