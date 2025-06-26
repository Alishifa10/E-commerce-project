fetch("http://localhost:8080/products")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("product-list");
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-md rounded p-4 w-60 border";
      card.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
        <p class="text-gray-700">Price: ₹${product.price}</p>
        <button class="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
      `;
      container.appendChild(card);
    });
  });
