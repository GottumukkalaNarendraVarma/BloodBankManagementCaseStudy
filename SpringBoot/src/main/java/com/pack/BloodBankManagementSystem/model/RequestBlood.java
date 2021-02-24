package com.pack.BloodBankManagementSystem.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.pack.BloodBankManagementSystem.Status;

@Entity
@Table(name = "requestblood")
public class RequestBlood {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer requesterId;
	private String patientName;
	private String reqBloodGroup;
	private String city;
	private String doctorName;
	private String hospitalName;
	private Date date;
	private String contactName;
	private String contactNumber;
	private String contactEmail;
	private String message;
	@Column(columnDefinition = "boolean default false")
	private boolean isLocked;

	@Column(length = 32, columnDefinition = "varchar(32) default 'PENDING'")
	@Enumerated(value = EnumType.STRING)
	private Status status = Status.PENDING;

	public RequestBlood() {
		super();

	}

	public RequestBlood(Integer requesterId, String patientName, String reqBloodGroup, String city, String doctorName,
			String hospitalName, Date date, String contactName, String contactNumber, String contactEmail,
			String message) {
		super();
		this.requesterId = requesterId;
		this.patientName = patientName;
		this.reqBloodGroup = reqBloodGroup;
		this.city = city;
		this.doctorName = doctorName;
		this.hospitalName = hospitalName;
		this.date = date;
		this.contactName = contactName;
		this.contactNumber = contactNumber;
		this.contactEmail = contactEmail;
		this.message = message;
	}

	public RequestBlood(String patientName, String reqBloodGroup, String city, String doctorName, String hospitalName,
			Date date, String contactName, String contactNumber, String contactEmail, String message) {
		super();
		this.patientName = patientName;
		this.reqBloodGroup = reqBloodGroup;
		this.city = city;
		this.doctorName = doctorName;
		this.hospitalName = hospitalName;
		this.date = date;
		this.contactName = contactName;
		this.contactNumber = contactNumber;
		this.contactEmail = contactEmail;
		this.message = message;
	}

	public Integer getRequesterId() {
		return requesterId;
	}

	public void setRequesterId(Integer requesterId) {
		this.requesterId = requesterId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getReqBloodGroup() {
		return reqBloodGroup;
	}

	public void setReqBloodGroup(String reqBloodGroup) {
		this.reqBloodGroup = reqBloodGroup;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getContactEmail() {
		return contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isLocked() {
		return isLocked;
	}

	public void setLocked(boolean isLocked) {
		this.isLocked = isLocked;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	

	
	
}
