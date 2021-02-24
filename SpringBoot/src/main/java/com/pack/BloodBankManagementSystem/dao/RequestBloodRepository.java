package com.pack.BloodBankManagementSystem.dao;

import java.util.Optional;

import javax.persistence.Column;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.pack.BloodBankManagementSystem.model.RequestBlood;

public interface RequestBloodRepository extends CrudRepository<RequestBlood, Integer> {
	
	@Transactional
	@Modifying
	@Query("update RequestBlood r set r.status='APPROVED' WHERE r.requesterId=:requesterId")
	
	public void readByStatus(@Param("requesterId") Integer requesterId);
	
	@Transactional
	@Modifying
	@Query("update RequestBlood r set r.status='REJECTED' where r.requesterId=:requesterId")
	public void changeByStatus(@Param("requesterId") Integer requesterId);

	public Optional<RequestBlood> findByRequesterId(Integer requesterId);

}
