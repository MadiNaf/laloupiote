package fr.laloupiote.laloupiotebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import fr.laloupiote.laloupiotebackend.entities.UserMail;



@Service
public class NotificationService {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public NotificationService(JavaMailSender javaMailSender) throws MailException {
		this.javaMailSender = javaMailSender;
	}
	
	public void sendNotification(UserMail userMail) {
		//send email
		
		SimpleMailMessage mail = new SimpleMailMessage();
//		a la place de mon mail, pensez à mlettre celui du client setTo
		mail.setTo("soizic.lee@gmail.com");
//		pensez à changer l'adresse mail aussi dans application properties
		mail.setFrom("soizic_lee@hotmail.com"); 
		mail.setSubject(userMail.getFirstName() + " " +userMail.getLastName()+" vous a envoyé un message");
		mail.setText("Nom : "+userMail.getLastName()+"\n"+"Prénom: "+userMail.getFirstName()+"\n"+"Téléphone: "
		+userMail.getPhone()+"\n" +"Email: "+ userMail.getEmailAddress()+"\n"+"Message : "+userMail.getMessage()+ "\n"); ;
		
		javaMailSender.send(mail);
		
	}
}
