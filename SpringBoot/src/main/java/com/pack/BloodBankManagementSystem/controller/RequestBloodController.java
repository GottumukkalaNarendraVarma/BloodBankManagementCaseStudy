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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pack.BloodBankManagementSystem.dao.RequestBloodRepository;
import com.pack.BloodBankManagementSystem.model.RequestBlood;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bloodbank")
public class RequestBloodController {
	@Autowired
	RequestBloodRepository repository;
	
	private static Logger LOGGER=LoggerFactory.getLogger(RequestBloodController.class);

	@PostMapping(value = "/request")
	public ResponseEntity<RequestBlood> postRequest(@RequestBody RequestBlood requestBlood) {
		try {
			RequestBlood _requestBlood = repository
					.save(new RequestBlood(requestBlood.getPatientName(), requestBlood.getReqBloodGroup(),
							requestBlood.getCity(), requestBlood.getDoctorName(), requestBlood.getHospitalName(),
							requestBlood.getDate(), requestBlood.getContactName(), requestBlood.getContactNumber(),
							requestBlood.getContactEmail(), requestBlood.getMessage()));
			LOGGER.info("Inserted the request details into database");
			
			return new ResponseEntity<>(_requestBlood, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}

	@GetMapping(value = "/approve")
	public ResponseEntity<List<RequestBlood>> getAllRequests() {
		List<RequestBlood> requests = new ArrayList<RequestBlood>();
		try {
			repository.findAll().forEach(requests::add);
			
			LOGGER.info("Fetched the request details from database");			

			if (requests.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(requests, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping(value="/update/{requesterId}") 
	   public ResponseEntity<RequestBlood> updateRequest(@PathVariable Integer requesterId) {
		try {
			System.out.println("to update the status");
		    repository.readByStatus(requesterId);
		    Optional<RequestBlood> request=repository.findById(requesterId);
		    RequestBlood requests=request.get();
		    LOGGER.info("Updated the status in database");
		    return new ResponseEntity<>(requests, HttpStatus.OK);
			
		} catch(Exception e) {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
		}
	}
	
	@GetMapping(value="/modify/{requesterId}") 
	   public ResponseEntity<RequestBlood> modifyRequest(@PathVariable Integer requesterId) {
		try {
		    repository.changeByStatus(requesterId);
		    Optional<RequestBlood> request=repository.findById(requesterId);
		    RequestBlood requests=request.get();
		    LOGGER.info("Updated the status in database");
		    return new ResponseEntity<>(requests, HttpStatus.OK);
			
		} catch(Exception e) {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
		}
	}
	
	@GetMapping("/requeststatus/{requesterId}")
    public ResponseEntity<RequestBlood> getDetailById(@PathVariable("requesterId") Integer requesterId){
        Optional<RequestBlood> requesterData=repository.findByRequesterId(requesterId);
        if(requesterData.isPresent()) {
            System.out.println("comes here");
            return new ResponseEntity<>(requesterData.get(),HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
}
		 
		 
	

}
