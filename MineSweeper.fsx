#r "node_modules/fable-core/Fable.Core.dll"

open Fable.Core
open Fable.Import.Browser


type Level = 
  | BegginerLevel
  | IntermediateLevel
  | AdvancedLevel

type CellState =
  | Hidden
  | Visible of int
  | Mine
  | Flag


type GameModel = {
  level : Level
  cols : int
  rows : int
  grid : Map<(int*int), CellState>
}



type GameState =
  | LevelScreen
  | GameLost
  | GameWon

module Win =
  let canvas = document.getElementsByTagName_canvas().[0]
  let context = canvas.getContext_2d()

  let rgb r g b= sprintf "rgb(%d,%d,%d)" r g b
  let filled color rect =
    let ctx = context
    ctx.fillStyle <- U3.Case1 color
    ctx.fillRect rect

  let dimensions () =
    canvas.width, canvas.height




