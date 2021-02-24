package com.pack.BloodBankManagementSystem.controller;

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

import com.pack.BloodBankManagementSystem.dao.RequestorRepository;
import com.pack.BloodBankManagementSystem.model.Requestor;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bloodbank")
public class RequestorController {
	@Autowired
	RequestorRepository repository;

	private static Logger LOGGER = LoggerFactory.getLogger(RequestorController.class);

	@PostMapping(value = "/requestors")
	public ResponseEntity<Requestor> postCustomer(@RequestBody Requestor requestor) {
		try {
			Requestor _requestor = repository.save(new Requestor(requestor.getUsername(),
					requestor.getEmail(), requestor.getPhone()));
			LOGGER.info("Inserted the requester details into database");

			return new ResponseEntity<>(_requestor, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@GetMapping("/checkloginRequestor/{requesterId}")
    public ResponseEntity<Optional<Requestor>> getRequestorById(@PathVariable("requesterId") Long requesterId){
        Optional<Requestor> requestorData=repository.findById(requesterId);
        if(requestorData.get().getRequesterId().equals(requesterId)) {
            System.out.println("came here");
            return new ResponseEntity<>(requestorData,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }
}
