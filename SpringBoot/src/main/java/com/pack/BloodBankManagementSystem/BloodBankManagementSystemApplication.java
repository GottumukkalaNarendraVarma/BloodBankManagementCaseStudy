package com.pack.BloodBankManagementSystem;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.pack.BloodBankManagementSystem.controller.DonorController;

@SpringBootApplication
public class BloodBankManagementSystemApplication {
	
	private static Logger LOGGER=LoggerFactory.getLogger(BloodBankManagementSystemApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BloodBankManagementSystemApplication.class, args);
		LOGGER.info("Execution Started");
	}

}
