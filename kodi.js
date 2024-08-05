function goToChannel(channelId) {
            window.location.href = `player.html?channel=${channelId}`;
        }



function myFunction() {
            var input, filter, channelGrid, items, i, txtValue;
            input = document.getElementById("searchInput");
            filter = input.value.toUpperCase();
            channelGrid = document.getElementById("channelGrid");
            items = channelGrid.getElementsByClassName("channel-item");
            for (i = 0; i < items.length; i++) {
                txtValue = items[i].textContent || items[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    items[i].style.display = "";
                } else {
                    items[i].style.display = "none";
                }
            }
        }

        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            const category = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.channel-item');
            items.forEach(item => {
                const itemCategories = item.getAttribute('data-categories') || '';
                item.style.display = category === 'all' || itemCategories.toLowerCase().includes(category) ? '' : 'none';
            });
        });
        
        document.getElementById('joinButton').addEventListener('click', function() {
        window.location.href = 'https://t.me/+s31Q__fl8zUxM2Nl'; // Replace with your desired URL
    });