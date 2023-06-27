<?php

namespace App\Modules\Game\Db;

use Illuminate\Support\Facades\DB;

final class GamePlayersDb implements IGamePlayersDb
{
    public function getCountPlayerInGameById(int $id): int
    {
        return DB::table(self::TABLE)
            ->where('game_id', $id)
            ->get()
            ->count();
    }

    public function getGamesByPlayerId(int $playerId): array
    {
        return DB::table(self::TABLE)
            ->where('player_id', $playerId)
            ->get()
            ->toArray();
    }
}
