use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};
use rand::Rng;

#[derive(Serialize, Deserialize, Clone)]
#[wasm_bindgen]
pub struct Game {
    pub id: u32,
    pub price: u32,
    pub rating: u8,
    pub year: u16,
    category: u8, 
}

#[wasm_bindgen]
pub struct GameCatalog {
    games: Vec<Game>,
}

#[wasm_bindgen]
impl GameCatalog {
    #[wasm_bindgen(constructor)]
    pub fn new(count: usize) -> GameCatalog {
        let mut rng = rand::thread_rng();
        let mut games = Vec::with_capacity(count);

        for i in 0..count {
            games.push(Game {
                id: i as u32,
                price: rng.gen_range(0..6000), 
                rating: rng.gen_range(40..100),
                year: rng.gen_range(2020..2025),
                category: rng.gen_range(0..5), 
            });
        }

        GameCatalog { games }
    }

    pub fn filter(&self, max_price: u32, min_rating: u8, genre_mask: u8) -> Box<[u32]> {
        self.games
            .iter()
            .filter(|g| {
                let price_ok = g.price <= max_price;
                let rating_ok = g.rating >= min_rating;
                
                let category_ok = if genre_mask == 0 {
                    true
                } else {
                    (genre_mask & (1 << g.category)) != 0
                };

                price_ok && rating_ok && category_ok
            })
            .map(|g| g.id)
            .collect::<Vec<u32>>()
            .into_boxed_slice()
    }

    pub fn get_game_by_index(&self, index: usize) -> JsValue {
        serde_wasm_bindgen::to_value(&self.games[index]).unwrap()
    }
}