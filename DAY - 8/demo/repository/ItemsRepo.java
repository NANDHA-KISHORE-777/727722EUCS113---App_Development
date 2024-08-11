package com.example.demo.repository;
 
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import com.example.demo.model.Items;

 
@Repository
public interface ItemsRepo extends JpaRepository<Items,Long>{
    List<Items> findByGroupName(String groupName);

}
