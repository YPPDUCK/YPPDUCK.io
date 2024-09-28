// Load content based on section
function loadContent(section) {
    fetch('content.txt')
        .then(response => response.text())
        .then(text => {
            const content = text.split('---');
            let sectionContent = '';
            switch (section) {
                case 'autobiography':
                    sectionContent = content[0];
                    break;
                case 'certificates-awards': // 更新此處的標籤名稱
                    sectionContent = content[1]; // 現在是證書及獎狀
                    break;
                default:
                    sectionContent = '<p>內容未找到</p>';
                    break;
            }
            document.getElementById('content').innerHTML = sectionContent;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Set active state for sidebar items
function setActive(activeItem) {
    const items = document.querySelectorAll('.sidebar-item');
    items.forEach(item => {
        if (item === activeItem) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Load the initial main content from an HTML file
function loadMainContent() {
    fetch('index.html')
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            const mainContentElement = tempDiv.querySelector('main');
            if (mainContentElement) {
                const mainContent = mainContentElement.innerHTML;
                document.getElementById('content').innerHTML = mainContent;
            } else {
                console.error('Main content not found in the loaded HTML.');
            }

            setActive(null);
        })
        .catch(error => console.error('Error loading main content:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logo').addEventListener('click', loadMainContent);
});

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const section = item.getAttribute('data-section');
        if (section) {
            loadContent(section);
            setActive(item);
        }
    });
});
