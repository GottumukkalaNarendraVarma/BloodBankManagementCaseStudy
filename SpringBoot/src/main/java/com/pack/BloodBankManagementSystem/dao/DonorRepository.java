package com.pack.BloodBankManagementSystem.dao;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.pack.BloodBankManagementSystem.model.Donor;

public interface DonorRepository extends CrudRepository<Donor, Long> {

	List<Donor> findByBloodgroup(String bloodgroup);

	public Optional<Donor> findByDonorId(Long donorId);

}
