package com.grafrank.model;

public class User {
    private String username;
    private String password;

    private Art[] artworks;

    public Art[] getArtworks() {
        return artworks;
    }

    public void setArtworks(Art[] artworks) {
        this.artworks = artworks;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
