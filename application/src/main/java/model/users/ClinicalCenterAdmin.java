package model.users;

import javax.validation.constraints.Pattern;
import model.clinic.Clinic;



public class ClinicalCenterAdmin {

	    private Long id;
		@Pattern(regexp = "^[A-Za-z]*$")
		private String name;
		@Pattern(regexp = "^[A-Za-z]*$")
		private String surname;
		@Pattern(regexp = "^[A-Za-z0-9+_.-]+@(.+)$")
		private String email;
		@Pattern(regexp = "^[A-Za-z0-9]*$")
		private String password;
		@Pattern(regexp = "^[A-Za-z ]*$")
		private String city;
		@Pattern(regexp = "^[0-9]{9,10}$")
		private String phone;
		private boolean active;
		private Clinic clinics;
		

		public ClinicalCenterAdmin() {
		}

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

		public String getSurname() {
			return surname;
		}

		public void setSurname(String surname) {
			this.surname = surname;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public boolean isActive() {
			return active;
		}

		public void setActive(boolean active) {
			this.active = active;
		}

		public Clinic getClinics() {
			return clinics;
		}

		public void setClinics(Clinic clinics) {
			this.clinics = clinics;
		}
	
	}
