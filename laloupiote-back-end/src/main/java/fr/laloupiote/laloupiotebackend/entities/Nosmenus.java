package fr.laloupiote.laloupiotebackend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Nosmenus {
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	
	private Long id;

	
	private String name;
	private String price;
	private Long category_id;
	private String category_name;
	private Long position;

	
//	private Long id;
//	
//	private String content;
//	private String startDate;
//	private String endDate;

	//	Constructeur
	public Nosmenus() {}
	public Nosmenus( Long param_id, String param_name, String param_price, 
			Long param_category_id, String param_category_name, Long param_position) {
		id = param_id;
		name = param_name;
		price = param_price;
		category_id = param_category_id;
		category_name = param_category_name;
		position = param_position;
	}
	public String getName() {
		return name;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public Long getPosition() {
		return position;
	}
	public void setPosition(Long position) {
		this.position = position;
	}
	
	
	

}