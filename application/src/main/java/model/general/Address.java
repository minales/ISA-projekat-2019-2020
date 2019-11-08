package model.general;

import javax.validation.constraints.Min;

import model.clinic.Clinic;
import model.clinicalcenter.ClinicalCenter;


public class Address {
	
	private Long id;
	private String state;
	private String city;
	private String street;
    @Min(value = 0)
	private int num;
	
	private Clinic clinic;
	private ClinicalCenter center;
	
	public Address() { }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public Clinic getClinic() {
		return clinic;
	}

	public void setClinic(Clinic clinic) {
		this.clinic = clinic;
	}

	public ClinicalCenter getCenter() {
		return center;
	}

	public void setCenter(ClinicalCenter center) {
		this.center = center;
	}
	
	

}
