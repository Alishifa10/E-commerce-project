package com.ecommerce.controller;

import com.ecommerce.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
public class ProductController {

    private List<Product> products = new ArrayList<>(Arrays.asList(
        new Product(1, "Smartphone", 15000),
        new Product(2, "Headphones", 2000),
        new Product(3, "Shoes", 3000)
    ));

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return products;
    }
}

