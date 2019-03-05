package fr.laloupiote.laloupiotebackend.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fr.laloupiote.laloupiotebackend.entities.UserMail;
import fr.laloupiote.laloupiotebackend.repositories.UserMailRepo;
import fr.laloupiote.laloupiotebackend.service.NotificationService;

@RestController
@CrossOrigin("*")
public class RegistrationController {
	
	public RegistrationController() {}
	
	@Autowired
	private UserMailRepo userRepo;
	
	@Autowired
	private NotificationService notificationService;
	
	
	private Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	
	
	@PostMapping("/sendemail")
	public UserMail sendEmail(@RequestBody UserMail userMail) {
		
			//	create user
		
		UserMail users = new UserMail();
		users.setFirstName(userMail.getFirstName());
		users.setLastName(userMail.getLastName());
		users.setPhone(userMail.getPhone());
		users.setEmailAddress(userMail.getEmailAddress());
		users.setEmail("soizic.lee@gmail.com");
		users.setMessage(userMail.getMessage());
		
		
	
			//send an email
		
		try {
			
			notificationService.sendNotification(userMail);
		}catch( MailException e) {
			//catch error	
			
			logger.info("Error Sending Mail: " + e.getMessage());
		}
		
		return userRepo.save(users);
	}

}
