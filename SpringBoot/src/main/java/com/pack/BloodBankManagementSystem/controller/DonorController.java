package com.pack.BloodBankManagementSystem.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pack.BloodBankManagementSystem.dao.DonorRepository;
import com.pack.BloodBankManagementSystem.model.Donor;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bloodbank")
public class DonorController {
	@Autowired
	DonorRepository repository;

	@PostMapping(value = "/donors")
	public ResponseEntity<Donor> postCustomer(@RequestBody Donor donor) {
		try {
			Donor _donor = repository.save(new Donor(donor.getUsername(), donor.getPhone(), donor.getEmail(),
					donor.getGender(), donor.getAge(), donor.getBloodgroup(), donor.getCity()));
			return new ResponseEntity<>(_donor, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "/donors/blood/{bloodgroup}")
	public ResponseEntity<List<Donor>> findByBloodgroup(@PathVariable("bloodgroup") String bloodgroup) {
		try {
			System.out.println(bloodgroup);
			List<Donor> donors = repository.findByBloodgroup(bloodgroup);

			if (donors.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(donors, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping("/checklogin/{donorId}")
	public ResponseEntity<Donor> getCustomerById(@PathVariable("donorId") long donorId) {
		Optional<Donor> donorData = repository.findByDonorId(donorId);
		if (donorData.get().getDonorId().equals(donorId)) {
			System.out.println("came here");
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/donors/status/{donorId}")
	public ResponseEntity<Donor> getDetailById(@PathVariable("donorId") Long donorId) {
		Optional<Donor> donData = repository.findByDonorId(donorId);
		if (donData.isPresent()) {
			return new ResponseEntity<>(donData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}