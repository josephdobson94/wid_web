const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (menuToggle && navbar) {
	menuToggle.addEventListener('click', () => {
		navbar.classList.toggle('open');
	});
}

// Pagination Functionality
const productsPerPage = 20;
let currentPage = 1;

function initializePagination() {
	const proContainer = document.querySelector('#products .pro-container');
	const products = document.querySelectorAll('#products .pro');
	const totalProducts = products.length;
	const totalPages = Math.ceil(totalProducts / productsPerPage);
	const paginationSection = document.getElementById('pagination');

	// Generate pagination buttons
	paginationSection.innerHTML = '';

	// Previous button
	if (currentPage > 1) {
		const prevBtn = document.createElement('a');
		prevBtn.href = '#';
		prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
		prevBtn.addEventListener('click', (e) => {
			e.preventDefault();
			currentPage--;
			displayPage(currentPage, products, totalPages);
			generatePagination(totalPages);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		paginationSection.appendChild(prevBtn);
	}

	// Page number buttons
	for (let i = 1; i <= totalPages; i++) {
		const pageBtn = document.createElement('a');
		pageBtn.href = '#';
		pageBtn.textContent = i;
		if (i === currentPage) {
			pageBtn.classList.add('active');
		}
		pageBtn.addEventListener('click', (e) => {
			e.preventDefault();
			currentPage = i;
			displayPage(currentPage, products, totalPages);
			generatePagination(totalPages);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		paginationSection.appendChild(pageBtn);
	}

	// Next button
	if (currentPage < totalPages) {
		const nextBtn = document.createElement('a');
		nextBtn.href = '#';
		nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
		nextBtn.addEventListener('click', (e) => {
			e.preventDefault();
			currentPage++;
			displayPage(currentPage, products, totalPages);
			generatePagination(totalPages);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		paginationSection.appendChild(nextBtn);
	}
}

function displayPage(pageNum, products, totalPages) {
	const startIndex = (pageNum - 1) * productsPerPage;
	const endIndex = startIndex + productsPerPage;

	products.forEach((product, index) => {
		if (index >= startIndex && index < endIndex) {
			product.style.display = 'flex';
		} else {
			product.style.display = 'none';
		}
	});
}

function generatePagination(totalPages) {
	const paginationSection = document.getElementById('pagination');
	paginationSection.innerHTML = '';

	// Previous button
	if (currentPage > 1) {
		const prevBtn = document.createElement('a');
		prevBtn.href = '#';
		prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
		prevBtn.addEventListener('click', (e) => {
			e.preventDefault();
			currentPage--;
			displayPage(currentPage, document.querySelectorAll('#products .pro'), totalPages);
			generatePagination(totalPages);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		paginationSection.appendChild(prevBtn);
	}

	// Page number buttons
	for (let i = 1; i <= totalPages; i++) {
		const pageBtn = document.createElement('a');
		pageBtn.href = '#';
		pageBtn.textContent = i;
		if (i === currentPage) {
			pageBtn.classList.add('active');
		}
		pageBtn.addEventListener('click', (e) => {
			e.preventDefault();
			currentPage = i;
			displayPage(currentPage, document.querySelectorAll('#products .pro'), totalPages);
			generatePagination(totalPages);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		paginationSection.appendChild(pageBtn);
	}

	// Next button
	if (currentPage < totalPages) {
		const nextBtn = document.createElement('a');
		nextBtn.href = '#';
		nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
		nextBtn.addEventListener('click', (e) => {
			e.preventDefault();
			currentPage++;
			displayPage(currentPage, document.querySelectorAll('#products .pro'), totalPages);
			generatePagination(totalPages);
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		paginationSection.appendChild(nextBtn);
	}
}

// Initialize pagination when page loads
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializePagination);
} else {
	initializePagination();
}
