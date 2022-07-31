package com.cg.mts.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Column;

@Entity
public class Driver extends AbstractUser {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int driverId;
	private String licenseNo;

	@OneToOne(fetch = FetchType.LAZY)
	private Cab cab;

	private float rating;
	
	@Column(name="status")
	private int status;
	
	public Driver() {

	}

	public Driver(int driverId, String licenseNo, Cab cab, float rating) {
		super();
		this.driverId = driverId;
		this.licenseNo = licenseNo;
		this.cab = cab;
		this.rating = rating;
	}

	public int getDriverId() {
		return driverId;
	}

	public void setDriverId(int driverId) {
		this.driverId = driverId;
	}

	public String getLicenseNo() {
		return licenseNo;
	}

	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}

	public Cab getCab() {
		return cab;
	}

	public void setCab(Cab cab) {
		this.cab = cab;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}
	
	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
}