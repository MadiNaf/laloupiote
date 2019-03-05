package fr.laloupiote.laloupiotebackend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserMail {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private Long id;
	private String firstName;
	private String lastName;
	private String emailAddress;
	private String email;
	private String phone;
	private String message;
	
	
//	CONSTRUCTEUR
	public UserMail() {}
	
	public UserMail( String param_firstName, String param_lastName, String param_emailAddress, 
			         String param_message, String param_phone, String param_email) {
		
		this.firstName = param_firstName;
		this.lastName = param_lastName;
		this.emailAddress = param_emailAddress;
		this.phone = param_phone;
		this.message = param_message;
		this.email = param_email;
	}	

	
//  GETTERS ET SETTERS	
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
	public String getFirstName() {
		return firstName;
	}

		
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	
}


