
			// Get the current page's filename
			var currentPage = window.location.pathname.split('/').pop();
		
			// Find the corresponding menu item and add the "active" class
			var menuItems = document.querySelectorAll('#top_menu li');
			for (var i = 0; i < menuItems.length; i++) {
				var link = menuItems[i].querySelector('a');
				if (link.getAttribute('href') === currentPage) {
					menuItems[i].classList.add('active');
				}
			}
		