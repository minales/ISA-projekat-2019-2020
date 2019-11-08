package model.clinic;

import java.util.List;
import model.general.Address;
import model.users.Physician;

public class Clinic {
	
    private Long id;
   	private String name;
	private String description;
	private double grade;
	private Address address;
	private List<Physician> physicians;;
	
	public Clinic() { }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getGrade() {
		return grade;
	}

	public void setGrade(double grade) {
		this.grade = grade;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<Physician> getPhysicians() {
		return physicians;
	}

	public void setPhysicians(List<Physician> physicians) {
		this.physicians = physicians;
	}
	
	

}
