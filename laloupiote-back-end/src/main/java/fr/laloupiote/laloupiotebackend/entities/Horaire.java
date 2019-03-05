package fr.laloupiote.laloupiotebackend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Horaire {
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private Long id;
	
    private String day;

    private String hm_opening;
    private String mm_opening;

    private String hm_closing;
    private String mm_closing;

    private String ha_opening;
    private String ma_opening;

    private String ha_closing;
    private String ma_closing;

    private boolean m_state;
    private boolean a_state;

// Constructeur
    public Horaire() {}
    public Horaire( Long id, String day, String hm_opening, String mm_opening, String hm_closing, String mm_closing,
    				String ha_opening, String ma_opening, String ha_closing, String ma_closing, boolean m_state, boolean a_state) {
    	
    	this.setDay(day);
    	
    	this.setHm_opening(hm_opening);
        this.setMm_opening(hm_opening);

        this.setHm_closing(hm_closing);
        this.setMm_closing(mm_closing);

        this.setHa_opening(ha_opening);
        this.setMa_opening(ma_opening);

        this.setHa_closing(ha_closing);
        this.setMa_closing(ma_closing);

        this.setM_state(m_state);
        this.setA_state(a_state);
 
    }

//  Getter & Setter
    public Long getId() {
    	return id;
    }
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getHm_opening() {
		return hm_opening;
	}
	public void setHm_opening(String hm_opening) {
		this.hm_opening = hm_opening;
	}
	public String getMm_opening() {
		return mm_opening;
	}
	public void setMm_opening(String mm_opening) {
		this.mm_opening = mm_opening;
	}
	public String getHm_closing() {
		return hm_closing;
	}
	public void setHm_closing(String hm_closing) {
		this.hm_closing = hm_closing;
	}
	public String getMm_closing() {
		return mm_closing;
	}
	public void setMm_closing(String mm_closing) {
		this.mm_closing = mm_closing;
	}
	public String getHa_opening() {
		return ha_opening;
	}
	public void setHa_opening(String ha_opening) {
		this.ha_opening = ha_opening;
	}
	public String getMa_opening() {
		return ma_opening;
	}
	public void setMa_opening(String ma_opening) {
		this.ma_opening = ma_opening;
	}
	public String getHa_closing() {
		return ha_closing;
	}
	public void setHa_closing(String ha_closing) {
		this.ha_closing = ha_closing;
	}
	public String getMa_closing() {
		return ma_closing;
	}
	public void setMa_closing(String ma_closing) {
		this.ma_closing = ma_closing;
	}
	public boolean isM_state() {
		return m_state;
	}
	public void setM_state(boolean m_state) {
		this.m_state = m_state;
	}
	public boolean isA_state() {
		return a_state;
	}
	public void setA_state(boolean a_state) {
		this.a_state = a_state;
	}
}
