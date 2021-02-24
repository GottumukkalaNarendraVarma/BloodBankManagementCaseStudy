package com.pack.BloodBankManagementSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.pack.BloodBankManagementSystem.Status;
@Entity
@Table(name="donateblood")
public class DonateBlood {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer donorId;
	private String timeOfTheDay;
	private Integer bloodGlucoseLevel;
	private String notes;
	@Column(columnDefinition = "boolean default false")
	private boolean isLocked;
	
	@Column(length = 32, columnDefinition = "varchar(32) default 'PENDING'")
	@Enumerated(value = EnumType.STRING)
	private Status status = Status.PENDING;
	
	public DonateBlood() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DonateBlood(Integer donorId, String timeOfTheDay, Integer bloodGlucoseLevel, String notes) {
		super();
		this.donorId = donorId;
		this.timeOfTheDay = timeOfTheDay;
		this.bloodGlucoseLevel = bloodGlucoseLevel;
		this.notes = notes;
	}

	public DonateBlood(String timeOfTheDay, Integer bloodGlucoseLevel, String notes) {
		super();
		this.timeOfTheDay = timeOfTheDay;
		this.bloodGlucoseLevel = bloodGlucoseLevel;
		this.notes = notes;
	}

	public Integer getDonorId() {
		return donorId;
	}

	public void setDonorId(Integer donorId) {
		this.donorId = donorId;
	}

	public String getTimeOfTheDay() {
		return timeOfTheDay;
	}

	public void setTimeOfTheDay(String timeOfTheDay) {
		this.timeOfTheDay = timeOfTheDay;
	}

	public Integer getBloodGlucoseLevel() {
		return bloodGlucoseLevel;
	}

	public void setBloodGlucoseLevel(Integer bloodGlucoseLevel) {
		this.bloodGlucoseLevel = bloodGlucoseLevel;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
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
