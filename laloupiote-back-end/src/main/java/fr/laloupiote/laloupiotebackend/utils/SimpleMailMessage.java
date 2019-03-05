/**
 * Models a simple mail message, including data such as the from, to, cc, subject, and text fiels.
 */

package fr.laloupiote.laloupiotebackend.utils;
import java.io.Serializable;
import org.springframework.mail.MailMessage;

@SuppressWarnings("serial")
public abstract class SimpleMailMessage implements MailMessage, Serializable{

	
	
	private String from;
		
	private String replyTo;
}
