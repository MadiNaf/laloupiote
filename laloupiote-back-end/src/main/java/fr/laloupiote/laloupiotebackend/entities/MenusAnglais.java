package fr.laloupiote.laloupiotebackend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MenusAnglais {

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	
	private Long id;

	private String name;
	private String price;
	private Long category_id;
	private String category_name;
	
//	CONSTRUCTEUR
	
	public MenusAnglais() {}
	public MenusAnglais( Long param_id, String param_name, String param_price, Long param_category_id, String param_category_name) {
		id = param_id;
		name = param_name;
		price = param_price;
		category_id = param_category_id;
		category_name = param_category_name;
	
	
		
		
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
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public Long getCategory_id() {
		return category_id;
	}
	public void setCategory_id(Long category_id) {
		this.category_id = category_id;
	}
	public String getCategory_name() {
		return category_name;
	}
	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}
}
