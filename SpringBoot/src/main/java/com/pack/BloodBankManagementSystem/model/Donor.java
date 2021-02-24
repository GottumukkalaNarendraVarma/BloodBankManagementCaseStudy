package com.pack.BloodBankManagementSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "donor")
public class Donor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long donorId;
	public String username;
	public String email;
	public String phone;
	public String bloodgroup;
	public String age;
	public String city;
	@Column(name = "gender")
	@Enumerated(EnumType.STRING)
	private Gender gender;

	public Donor(String username, String phone, String email, Gender gender, String age, String bloodgroup,
			String city) {
		super();
		this.username = username;
		this.email = email;
		this.bloodgroup = bloodgroup;
		this.city = city;
		this.gender = gender;
		this.phone = phone;
		this.age = age;
	}

	public Donor() {
		super();
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public Donor(Long donorId, String username, String password, String email, String bloodgroup, String city,
			Gender gender) {
		super();
		this.donorId = donorId;
		this.username = username;
		this.email = email;
		this.bloodgroup = bloodgroup;
		this.city = city;
		this.gender = gender;
	}

	public Long getDonorId() {
		return donorId;
	}

	public void setId(Long donorId) {
		this.donorId = donorId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

}
