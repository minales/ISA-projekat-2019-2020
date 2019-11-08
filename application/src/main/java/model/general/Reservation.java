package model.general;

import java.util.Date;
import java.util.List;

import model.users.Physician;
import model.users.User;

public class Reservation {

	    private Long id;
	    private Date date;
	    private boolean made;
	    private List<User> users;
	    private Physician physician;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public boolean isMade() {
			return made;
		}
		public void setMade(boolean made) {
			this.made = made;
		}
		public List<User> getUsers() {
			return users;
		}
		public void setUsers(List<User> users) {
			this.users = users;
		}
		public Physician getPhysician() {
			return physician;
		}
		public void setPhysician(Physician physician) {
			this.physician = physician;
		}
		public Date getDate() {
			return date;
		}
		public void setDate(Date date) {
			this.date = date;
		}
	    
	    
}
