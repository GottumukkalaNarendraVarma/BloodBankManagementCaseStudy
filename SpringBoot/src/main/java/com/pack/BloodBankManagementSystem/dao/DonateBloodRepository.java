package com.pack.BloodBankManagementSystem.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.pack.BloodBankManagementSystem.model.DonateBlood;

public interface DonateBloodRepository extends CrudRepository<DonateBlood, Integer> {
	
	@Transactional
	@Modifying
	@Query("update DonateBlood d set d.status='APPROVED' WHERE d.donorId=:donorId")
	
	public void readByStatus(@Param("donorId") Integer donorId);
	
	@Transactional
	@Modifying
	@Query("update DonateBlood d set d.status='REJECTED' where d.donorId=:donorId")
	public void changeByStatus(@Param("donorId") Integer donorId);

	public Optional<DonateBlood> findByDonorId(Integer donorId);

}
