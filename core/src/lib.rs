use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet_user(name: &str) -> String {
    format!("Привіт, {}! Це WebAssembly на Rust.", name)
}

#[wasm_bindgen]
pub struct GameItem {
    pub id: u32,
    pub price: u32,
}

#[wasm_bindgen]
impl GameItem {
    #[wasm_bindgen(constructor)]
    pub fn new(id: u32, price: u32) -> GameItem {
        GameItem { id, price }
    }
}