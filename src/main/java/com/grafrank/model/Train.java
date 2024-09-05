package com.grafrank.model;

public class Train {
    private Art[] artworks;
    private Location[] location;

    private Rank rank;

    public Rank getRank() {
        return rank;
    }

    public void setRank(Rank rank) {
        this.rank = rank;
    }

    public Art[] getArtworks() {
        return artworks;
    }

    public void setArtworks(Art[] artworks) {
        this.artworks = artworks;
    }

    public Location[] getLocation() {
        return location;
    }

    public void setLocation(Location[] location) {
        this.location = location;
    }
}
