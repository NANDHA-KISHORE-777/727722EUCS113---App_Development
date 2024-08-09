package com.example.demo.controller;

import com.example.demo.model.Items;
import com.example.demo.service.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/items")
public class ItemsController {

    @Autowired
    private ItemsService itemsService;

    @PostMapping
    public ResponseEntity<Items> createItem(@RequestBody Items item) {
        Items savedItem = itemsService.saveItem(item);
        return ResponseEntity.ok(savedItem);
    }

    @GetMapping
    public ResponseEntity<List<Items>> getAllItems() {
        List<Items> items = itemsService.getAllItems();
        return ResponseEntity.ok(items);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Items> getItemById(@PathVariable Long id) {
        Optional<Items> item = itemsService.getItemById(id);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Items> updateItem(@PathVariable Long id, @RequestBody Items item) {
        Optional<Items> existingItemOpt = itemsService.getItemById(id);
        if (existingItemOpt.isPresent()) {
            Items existingItem = existingItemOpt.get();
            existingItem.setProductSKU(item.getProductSKU()); // Update only SKU
            Items updatedItem = itemsService.saveItem(existingItem); // Save updated item
            return ResponseEntity.ok(updatedItem);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/by-group")
public ResponseEntity<List<Items>> getItemsByGroup(@RequestParam String groupName) {
    List<Items> items = itemsService.getItemsByGroup(groupName); // Implement this method in ItemsService
    return ResponseEntity.ok(items);
}

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        itemsService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}
