package com.example.demo.repository;


import com.example.demo.model.Warehouse;



import org.springframework.data.jpa.repository.JpaRepository;


public interface WarehouseRepo extends JpaRepository<Warehouse, Long> {

    
}
