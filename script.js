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
                case 'study-plan':
                    sectionContent = content[1];
                    break;
                case 'research-plan':
                    sectionContent = content[2];
                    break;
                case 'work-achievements':
                    sectionContent = content[3];
                    break;
                case 'other-experiences':
                    sectionContent = content[4];
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
            item.classList.add('active'); // 添加active類別
        } else {
            item.classList.remove('active'); // 移除active類別
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
        })
        .catch(error => console.error('Error loading main content:', error));
}

// Event listener for the logo click to load main content
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logo').addEventListener('click', loadMainContent);
});

// Event listeners for sidebar items
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const section = item.getAttribute('data-section');
        if (section) {
            loadContent(section);
            setActive(item);  // 將當前點擊的項目作為參數傳遞
        }
    });
});
