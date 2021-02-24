package com.pack.BloodBankManagementSystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "requestor")
public class Requestor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long requesterId;
	public String username;
	public String phone;
	public String email;

	public Requestor() {
		super();
	}

	public Requestor(Long requesterId, String username, String phone, String email) {
		super();
		this.requesterId = requesterId;
		this.username = username;
		this.phone = phone;
		this.email = email;
	}

	public Requestor(String username, String phone, String email) {
		super();
		this.username = username;
		this.phone = phone;
		this.email = email;
	}

	public Long getRequesterId() {
		return requesterId;
	}

	public void setRequesterId(Long requesterId) {
		this.requesterId = requesterId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

	

	

}
