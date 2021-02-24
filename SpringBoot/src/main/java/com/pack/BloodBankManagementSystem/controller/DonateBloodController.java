package com.pack.BloodBankManagementSystem.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pack.BloodBankManagementSystem.dao.DonateBloodRepository;
import com.pack.BloodBankManagementSystem.model.DonateBlood;
import com.pack.BloodBankManagementSystem.model.RequestBlood;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bloodbank")
public class DonateBloodController {
	@Autowired
	DonateBloodRepository repository;
	
	private static Logger LOGGER=LoggerFactory.getLogger(DonateBloodController.class);

	@PostMapping(value = "/donate")
	public ResponseEntity<DonateBlood> postDonation(@RequestBody DonateBlood donateBlood) {
		try {
			DonateBlood _donateBlood = repository.save(new DonateBlood(donateBlood.getTimeOfTheDay(),
					donateBlood.getBloodGlucoseLevel(), donateBlood.getNotes()));
			LOGGER.info("posted the data into database");
			return new ResponseEntity<>(_donateBlood, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "/donors")
	public ResponseEntity<List<DonateBlood>> getAllDonations() {
		List<DonateBlood> donations = new ArrayList<DonateBlood>();
		try {
			repository.findAll().forEach(donations::add);
			
			LOGGER.info("fetched the donor details from database");

			if (donations.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(donations, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/accept/{donorId}") 
	   public ResponseEntity<DonateBlood> updateDonation(@PathVariable Integer donorId) {
		try {
			System.out.println("to update the status");
		    repository.readByStatus(donorId);
		    Optional<DonateBlood> donation=repository.findById(donorId);
		    DonateBlood donations=donation.get();
		    return new ResponseEntity<>(donations, HttpStatus.OK);
			
		} catch(Exception e) {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
		}
	}
	
	@GetMapping(value="/reject/{donorId}") 
	   public ResponseEntity<DonateBlood> modifyDonation(@PathVariable Integer donorId) {
		try {
			System.out.println("to update the status");
		    repository.changeByStatus(donorId);
		    Optional<DonateBlood> donation=repository.findById(donorId);
		    DonateBlood donations=donation.get();
		    return new ResponseEntity<>(donations, HttpStatus.OK);
			
		} catch(Exception e) {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
		}
	}
	
	@GetMapping("/donationstatus/{donorId}")
    public ResponseEntity<DonateBlood> getDetailsById(@PathVariable("donorId") Integer donorId){
        Optional<DonateBlood> donorData=repository.findById(donorId);
        if(donorData.isPresent()) {
        	System.out.println("comes here");
            return new ResponseEntity<>(donorData.get(),HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
}
	@GetMapping("/donatestatus/{donorId}")
    public ResponseEntity<DonateBlood> getDetailById(@PathVariable("donorId") Integer donorId){
        Optional<DonateBlood> requesterData=repository.findByDonorId(donorId);
        if(requesterData.isPresent()) {
            System.out.println("comes here");
            return new ResponseEntity<>(requesterData.get(),HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
}
		 

}
