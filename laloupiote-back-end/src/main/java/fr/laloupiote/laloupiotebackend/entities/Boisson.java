package fr.laloupiote.laloupiotebackend.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Boisson {
	
	
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String CategoryName;
	private String category;
	private String name;
	private String quantities_1;
	private String quantities_2;
	private String quantities_3;
	private String price_1;
	private String price_2;
	private String price_3;
	private String category_boisson_id;
	
	
//	CONSTRUCTEUR
	
	public Boisson() {}


	public Boisson(Long param_id, String param_categoryName, String param_category, String param_name, String param_quantities_1, String param_quantities_2,
			String param_quantities_3, String param_price_1, String param_price_2, String param_price_3, String param_category_boisson_id) {
		
	
		id                  = param_id;
		CategoryName        = param_categoryName;
		category            = param_category;
		name                = param_name;
		quantities_1        = param_quantities_1;
		quantities_2        = param_quantities_2;
		quantities_3        = param_quantities_3;
		price_1             = param_price_1;
		price_2             = param_price_2;
		price_3             = param_price_3;
		category_boisson_id = param_category_boisson_id;
	}


	
//	GETTERS AND SETTERS
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getCategoryName() {
		return CategoryName;
	}


	public void setCategoryName(String categoryName) {
		CategoryName = categoryName;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getQuantities_1() {
		return quantities_1;
	}


	public void setQuantities_1(String quantities_1) {
		this.quantities_1 = quantities_1;
	}


	public String getQuantities_2() {
		return quantities_2;
	}


	public void setQuantities_2(String quantities_2) {
		this.quantities_2 = quantities_2;
	}


	public String getQuantities_3() {
		return quantities_3;
	}


	public void setQuantities_3(String quantities_3) {
		this.quantities_3 = quantities_3;
	}


	public String getPrice_1() {
		return price_1;
	}


	public void setPrice_1(String price_1) {
		this.price_1 = price_1;
	}


	public String getPrice_2() {
		return price_2;
	}


	public void setPrice_2(String price_2) {
		this.price_2 = price_2;
	}


	public String getPrice_3() {
		return price_3;
	}


	public void setPrice_3(String price_3) {
		this.price_3 = price_3;
	}


	public String getCategory_boisson_id() {
		return category_boisson_id;
	}


	public void setCategory_boisson_id(String category_boisson_id) {
		this.category_boisson_id = category_boisson_id;
	}


	
	
	

}
