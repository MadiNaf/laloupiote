package fr.laloupiote.laloupiotebackend.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import fr.laloupiote.laloupiotebackend.entities.User;

public class UtilTools {

	public UtilTools() {
		
	}
//	##########################################################################################
	//	Methode de teste de la validité du token de l'utilisateur
	static public boolean isValidToken( User param_user, String param_token) {
		return param_user.getToken().equals(param_token);
	}
	
	// Methode de verification du role de l'utilisateur
	static public boolean hasRole( User param_user, String[] param_roles) {
		List<String>roles = Arrays.asList(param_roles);
		return roles.contains( param_user.getRole() );
	}
	
	//	Methode de verification si l'utilisateur est possede les droits de demander des information 
	static public boolean isConcernedUser( User param_user, Long param_concernedUserId) {
		return param_user.getId() == param_concernedUserId;
	}
	//	Methode de mis à jour du token
	static public void refreshToken( User param_user, HttpServletResponse param_response) {
		param_user.setToken(genNewToken( ) );
		param_response.setHeader("X-TOKEN", param_user.getToken() );
		param_response.setHeader("Access-Controle-Expose-Headers", "X-TOKEN");
		param_response.setHeader("Access-Control-Allow-Header", "X-TOKEN");
	}
//	##########################################################################################
	//	Methode de cryptage d'une chaine de caractere 
	static public String crypt( String param_str) {
		MessageDigest pw;
		try {
			pw = MessageDigest.getInstance("SHA-256");
			pw.update( param_str.getBytes() );
			byte[] data = pw.digest();
			
			StringBuffer buff = new StringBuffer();
			for (byte bytes: data) {
				buff.append( String.format("%02X", bytes & 0xff));
			}
			return buff.toString();
		}catch ( NoSuchAlgorithmException e) {
			return "no crypt";
		}
	}
//	##########################################################################################
	//	Methode de generation d'une clé d'api crypté 
	static public String genApikey() {
		String str = "lookmytopmoomoot_" + Math.random();
		return UtilTools.crypt(str);
	}
	
	// Methode de generation de mots de pass crypté
	static public String genPasswd( String param_str) {
		String str = "weareteamloupiote_" + param_str;
		return UtilTools.crypt(str);
	}
	
	// Methode de generation de token crypté
	static public String genNewToken() {
		long timestamp = System.currentTimeMillis();
		String str = "theteamloupiote_arethetopmoumout" + timestamp;
		return UtilTools.crypt(str);
	}
}
