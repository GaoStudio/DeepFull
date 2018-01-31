import React, {Component} from 'react';
import './MusicPlayer.css';
class MusicPlayer extends Component {
    render() {
        return (
            <div className="MusicPlayer">
                <div className="MusicPlayerWrapper">
                    <div className="MusicPlayerImg" ><img src={require('../images/cover.png')} /></div>
                    <div className="MusicPlayerControl">
                        <div className="MusicPlayerControlLeft"></div>
                        <div className="MusicPlayerControlWrapper">
                            <div className="MusicPlay">
                                <div className="MusicPlayButton">
                                    <button type="button" aria-controls="mep_0" title="Play/Pause"></button>
                                </div>
                                <div className="MusicPlayerName">等你下课 -- 周杰伦</div>
                            </div>
                            <div className="SoundPlay">
                                <div className="MusicPlayButton">
                                    <button type="button" aria-controls="mep_0" title="Play/Pause"></button>
                                </div>
                                <div className="SoundPlaySlider">
                                    <div className="total"></div>
                                    <div className="current"></div>
                                    <div className="handle"></div>
                                </div>
                            </div>
                        </div>
                        <div className="MusicPlayerControlRight"> </div>

                    </div>
                </div>
                <div className="MusicPlayerProgress">
                    <div className="loaded"></div>
                    <div className="current"></div>
                    <img className="control" src={require('../images/handle.png')}></img>
                    <span className="float">
                        <span className="float-current">00:16</span>
                        <span className="float-corner"></span>
                    </span>
                </div>
            </div>
        )
    }
}
export default MusicPlayer