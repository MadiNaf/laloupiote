package fr.laloupiote.laloupiotebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.laloupiote.laloupiotebackend.entities.ArticleFile;

@Repository
public interface FileRepository extends JpaRepository<ArticleFile, Long>{

}
