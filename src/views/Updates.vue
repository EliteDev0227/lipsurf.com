<template>
  <BaseLayout>
    <v-container style="max-width: 1040px">
      <div style="text-align: center">
        <h1>LipSurf Updates</h1>
      </div>
      <ol class="update-posts" style="line-height: 1.2em">
        <UpdateEntry version="4.4.5" date="2021-12-14">
          <ul>
            <li>Misc. improvements.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.4.4" date="2021-12-11">
          <ul>
            <li>Misc. improvements.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.4.3" date="2021-11-30">
          <ul>
            <li>Improvements to Duolingo plugin.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.4.2" date="2021-11-24">
          <ul>
            <li>Fixed small regression in tags.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.4.1" date="2021-11-23">
          <ul>
            <li><f-lbl premium /> Better automatic spacing with dictation.</li>
            <li>Improved scrolling for many websites (including Google Docs, Forms).</li>
            <li>Improved switching between <span class="voice-cmd">spell mode</span> and <span class="voice-cmd">dictation mode</span> (tags are no longer lost). (Thanks Anandi!)</li>
            <li>Improved clicking tags. (Thanks Anandi!)</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.4.0" date="2021-11-20">
          <ul>
            <li><f-lbl premium /> More intelligient dictation will prevent accidentally executed commands.</li>
            <li><f-lbl premium /> Switching to <span class="voice-cmd">dictation mode</span> after <span class="voice-cmd">spell mode</span> works now as you would expect (with both normal mode and dictation mode activated). Thanks Anandi!</li>
            <li>New <span class="voice-cmd">dictation lock mode</span> command — limits the commands that can be executed to only those related to dictation. Say <span class="voice-cmd">normal mode</span> to go back to executing regular commands.</li>
            <li><f-lbl premium /> New "Dictate here with LipSurf" button when right-clicking editable text fields! (Thanks <a href="https://twitter.com/angeletgaruda?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">@angeletgaruda</a>)
              <img
                width="454"
                height="285"
                src="/img/updates/right-click-dictate-here.png"
                alt="New &quot;Dictate here with LipSurf&quot; menu option when right-clicking editable text fields"
              />
            </li>
            <li><f-lbl premium /> New scratchpad on the new tab page!
              <img
                width="616"
                height="305"
                src="/img/updates/scratchpad.png"
                alt="New scratchpad on new tab page is a convenient place to dictate text with full voice editing capabilities."
              />
            </li>
            <li>Improvements to tutorial.</li>
            <li>Fixed tags letters/numbers preference not saving. (Thanks <a href="https://discuss.lipsurf.com/u/JojoFuu" target="_blank">@JojoFuu</a>)</li>
            <li>No longer opening updates page when extension icon is clicked after an update. Updates can be conveniently opened by right-clicking the extension icon and clicking "what's new".</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.3.0" date="2021-11-5">
          <ul>
            <li>
              New popup for when additional steps need to be taken for
              <f-lbl premium />dictation on Google Apps (e.g. Google Sheets,
              Slides, Gmail, Docs etc.)
            </li>
            <li>
              More intelligent spacing between dates (with slashes) and numbers.
            </li>
            <li>New <span class="voice-cmd">remove spaces</span> command.</li>
            <li>
              LipSurf tips on the new tab page.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.2.0" date="2021-10-8">
          <ul>
            <li>
              Fixes issue where LipSurf mistankenly asks for upgrade when
              already on a paid plan (would show if there were internet
              connection issues when Chrome was started).
            </li>
            <li>
              <f-lbl premium /> Dictation now works automatically in Google
              Sheets.
            </li>
            <li>
              <f-lbl plus /> Added "show hint" to WaniKani and fixed automatic
              showing hint feature showing prematurely with Japanese (thanks
              <a target="_blank" href="https://discuss.lipsurf.com/u/dagger/summary">@Dagger</a
              >)
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.1.2" date="2021-8-28">
          <ul>
            <li>Fixed <span class="voice-cmd">autoscroll</span>.</li>
            <li>
              <f-lbl premium /> Merged <span class="voice-cmd">literal *</span>,
              <span class="voice-cmd">dictate *</span> and
              <span class="voice-cmd">write *</span> commands to work for both
              spelling out symbols like punctuation and spelling out commands
              instead of executing them. Note that any variation can be used and
              will do the same thing.
            </li>
            <li>
              Fixed <span class="voice-cmd">untag</span> sometimes being
              recognized as the <span class="voice-cmd">am</span> tag. (Thanks
              Sophie!)
            </li>
            <li>Duolingo improvements.</li>
            <li>
              <f-lbl premium />Better handling of quotation marks and
              apostrophes. (Thanks Sophie!)
            </li>
            <li>
              <f-lbl premium />Better handling of "@" at sign. (Thanks Sophie!)
            </li>
            <li>Improvements to custom shortcuts.</li>
            <li>Improvements to underlining replacements.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.1.1" date="2021-8-4">
          <ul>
            <li><f-lbl premium /> Dictation works in more places.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.1.0" date="2021-8-1">
          <ul>
            <li>
              New <span class="voice-cmd">press * </span> command for emulating
              keyboard presses (e.g.
              <span class="voice-cmd">press Ctrl-P</span>).
            </li>
            <li>Allowing regex match groups in custom shortcuts.</li>
            <li>Fixed Japanese recognizer issues.</li>
            <li>Now showing new custom shortcuts on the new tab page.</li>
            <li>Improved WaniKani <f-lbl plus /> plugin.</li>
            <li>
              New context menu for quickly switching back to English, pausing
              and opening help.
              <img
                width="260"
                height="330"
                src="/img/updates/context-menu.png"
                alt="New context menu when right-clicking extension icon."
              />
            </li>
            <li>
              Fixed edge-case where wake-word <f-lbl premium /> would not
              respond.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.0.3" date="2021-7-8">
          <ul>
            <li>Fixed <span class="voice-cmd">select *</span> command.</li>
            <li>Fixed commands not working while address bar was focused.</li>
            <li>
              Fixed <span class="voice-cmd">go to [URL]</span> not working on
              certain hosts without TLDs.
            </li>
            <li>
              Fixed migrating to v4 freeze when custom plugins were installed.
            </li>
            <li>
              Fixed navigation issue in <span class="voice-cmd">tutorial</span>.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.0.2" date="2021-7-3">
          <ul>
            <li>Fixed issues with "show live transcript" option.</li>
            <li>Fixed issues with dictating punctuation.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.0.1" date="2021-7-1">
          <ul>
            <li>
              Fixed issues with tutorial automatically opening unnecessarily on
              Chrome start.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="4.0.0" date="2021-6-29">
          <div class="video-cont">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/X15pkLP3To4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <ul>
            <li>
              Dictation is now automatic!
              <div class="mute">
                Simply start speaking with a textbox selected, there's no longer
                a need to say <span class="voice-cmd">dictate *</span> or
                <span class="voice-cmd">dictation mode</span>.
              </div>
            </li>
            <li>
              New custom shortcuts manager!
              <div class="video-cont">
                <img
                  width="610"
                  height="477"
                  src="/img/updates/custom-shortcuts-manager.png"
                  alt="Interface for managing custom shortcuts screenshot"
                />
              </div>
            </li>
            <li>
              New option to use numbers instead of letters for annotations!
              <div class="video-cont">
                <img
                  width="1074"
                  height="363"
                  src="/img/updates/v4-options2.png"
                  alt="New numbers option for annotations screenshot"
                />
              </div>
            </li>
            <li>
              New option to automatically turn on LipSurf when Chrome starts!
            </li>
            <li>
              New option to automatically pause LipSurf when Chrome loses focus!
              <div class="video-cont">
                <img
                  width="744"
                  height="158"
                  src="/img/updates/v4-options.png"
                  alt="New options screenshot"
                />
              </div>
            </li>
          </ul>
          <h3>New Commands</h3>
          <ul>
            <li>
              <span class="voice-cmd">repeat</span> command - repeat the
              previous command X times.
            </li>
            <li>
              <span class="voice-cmd">unfocus</span> command - clicks out of the
              current focused element.
            </li>
            <li>
              <span class="voice-cmd">clear</span> command - clears the focused
              text box.
            </li>
            <li>
              <span class="voice-cmd">go to previous field</span> - the opposite
              of <span class="voice-cmd">go to next field</span> for navigating
              forms.
            </li>
          </ul>
          <h3>Other Improvements</h3>
          <ul>
            <li>Live transcript stays open while moused over.</li>
            <li>
              Fixed WaniKani auto-pause LipSurf during pronunciation playback.
            </li>
            <li>Fixed media <span class="voice-cmd">resume</span> command.</li>
            <li>Various performance improvements and bug fixes.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="3.11.4" date="2021-3-17">
          <li>
            Upgraded <f-lbl premium />wake-word accuracy and lessened resource
            usage!
          </li>
          <li>
            Fixed
            <f-lbl premium />dictation mode on Outlook.com
          </li>
        </UpdateEntry>
        <UpdateEntry version="3.11.3" date="2021-2-4">
          <li>Improved live transcript.</li>
          <li>
            Fixed bugs in
            <f-lbl premium />dictation mode.
          </li>
        </UpdateEntry>
        <UpdateEntry version="3.11.2" date="2021-1-14">
          <li>
            Fixed bugs in
            <f-lbl plus />WaniKani and <f-lbl premium />dictation mode.
          </li>
        </UpdateEntry>
        <UpdateEntry version="3.11.1" date="2021-1-7">
          <li>Improved dictation for certain fields.</li>
        </UpdateEntry>
        <UpdateEntry version="3.11.0" date="2020-12-29">
          <li>Dictation and spelling modes show icons!</li>
          <li>
            New <span class="voice-cmd">next field</span> command for navigating
            forms!
          </li>
          <li>Improved dictation.</li>
          <li>Improved Duolingo.</li>
        </UpdateEntry>
        <UpdateEntry version="3.10.0" date="2020-12-5">
          <li>
            You can now use a custom URL on the new tab page.
            <div class="video-cont">
              <img
                width="521"
                height="282"
                src="/img/updates/new-tab-custom-url.png"
                alt="Interface for setting a custom URL"
              />
            </div>
          </li>
          <li>Fixed some dictation quirks.</li>
          <li>Improved performance!</li>
          <li>
            Improved Russian translations. (Thanks
            <a href="https://www.youtube.com/channel/UCd99oM7GvrWrVoaz1i_6fwA"
              >russian.with.dasha</a
            >!)
          </li>
        </UpdateEntry>
        <UpdateEntry version="3.9.0" date="2020-9-23">
          <li>
            Removed more <span class="voice-cmd">tag</span> labels that could be
            easily misheard. (Thanks Daniel!)
          </li>
          <li>Added Dutch to Duolingo plugin.</li>
          <li>
            Gmail <span class="voice-cmd">recipients</span> and
            <span class="voice-cmd">subject</span> command fixed.
          </li>
          <li>Improved Duolingo plugin.</li>
        </UpdateEntry>
        <UpdateEntry version="3.8.1" date="2020-9-5">
          <li>Hotfix: LipSurf won't start.</li>
        </UpdateEntry>
        <UpdateEntry version="3.8.0" date="2020-9-4">
          <li>
            Turned off language switching commands by default. You may re-enable
            them if you need via the options.
          </li>
          <li>
            Added separate language switching commands in the Duolingo and
            <f-lbl plus /> WaniKani plugins.
          </li>
          <li><span class="voice-cmd">Tag</span> improvements.</li>
          <li>Contexts now have better ordering in the help menu.</li>
          <li>Numerous bug fixes.</li>
        </UpdateEntry>
        <UpdateEntry version="3.7.1" date="2020-8-26">
          <li>Fixes clicking disambiguated tags.</li>
        </UpdateEntry>
        <UpdateEntry version="3.7.0" date="2020-8-21">
          <div class="video-cont">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/e_PXkuPp7sI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <li>
            <f-lbl premium /> New text editing commands:
            <ul>
              <li>
                Selection:
                <ul>
                  <li><span class="voice-cmd">select *</span></li>
                  <li>
                    <span class="voice-cmd"
                      >select previous/next [n] word(s)</span
                    >
                  </li>
                  <li><span class="voice-cmd">deselect</span></li>
                </ul>
              </li>
              <li>
                Deleting:
                <ul>
                  <li><span class="voice-cmd">backspace</span></li>
                  <li>
                    <span class="voice-cmd"
                      >delete previous/next [n] word(s)</span
                    >
                  </li>
                </ul>
              </li>
              <li>
                Cursor movement:
                <ul>
                  <li><span class="voice-cmd">move to start/end</span></li>
                  <li>
                    <span class="voice-cmd"
                      >move back/forward [n] character(s)</span
                    >
                  </li>
                  <li>
                    <span class="voice-cmd">move back/forward [n] word(s)</span>
                  </li>
                  <li>
                    <span class="voice-cmd">move back/forward [n] line(s)</span>
                  </li>
                  <li>
                    <span class="voice-cmd"
                      >move back/forward [n] paragraph(s)</span
                    >
                  </li>
                </ul>
              </li>
              <li>
                Other:
                <ul>
                  <li><span class="voice-cmd">all caps</span></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><f-lbl plus /> Improved WaniKani Finnish support.</li>
          <li><f-lbl plus /> WaniKani base language option.</li>
          <li>Improved subscription management.</li>
          <li>Various bug fixes and miscellaneous improvements.</li>
        </UpdateEntry>
        <UpdateEntry version="3.6.0" date="2020-7-8">
          <li>
            New <span class="voice-cmd">pronounce</span> (<span
              class="voice-cmd"
              ><ruby
                >発音<rp>（</rp>
                <rt>はつおん</rt>
                <rp>）</rp>
              </ruby></span
            >) command in WaniKani!
          </li>
          <li>
            🇯🇵 Added official Japanese translations (some untested commands
            remain).
          </li>
          <li><f-lbl premium /> Fixed default sensitivity for wake-word.</li>
          <li>
            Fixed <span class="voice-cmd">repeat</span>, and
            <span class="voice-cmd">repeat slowly</span> in Duolingo
          </li>
        </UpdateEntry>
        <UpdateEntry version="3.5.0" date="2020-7-7">
          <li>
            Improved wake-word performance, accuracy, and added new wake-word
            settings:
            <div class="video-cont">
              <img
                width="486"
                height="249"
                src="/img/updates/wake-word.png"
                alt="You can now select the microphone to use and the sensitivity for the wake word"
              />
            </div>
          </li>
          <li>Gmail fixes</li>
          <li><span class="voice-cmd">New paragraph</span> fix.</li>
          <li>
            LipSurf now works on all tabs without refreshing immediately after
            installing.
          </li>
        </UpdateEntry>
        <UpdateEntry version="3.4.3" date="2020-6-23">
          <li>Minor bug fixes</li>
        </UpdateEntry>
        <UpdateEntry version="3.4.2" date="2020-6-19">
          <li>Minor bug fixes</li>
        </UpdateEntry>
        <UpdateEntry version="3.4.1" date="2020-6-12">
          <li>Minor bug fixes</li>
        </UpdateEntry>
        <UpdateEntry version="3.4.0" date="2020-6-10">
          <li>🇫🇷 Official French support!</li>
          <li>Performance improvements.</li>
          <li>Custom shortcuts improvements.</li>
          <li>
            Duolingo improvements including
            <span class="voice-cmd">repeat</span> and
            <span class="voice-cmd">repeat slowly</span> commands.
          </li>
          <li><f-lbl plus /> WaniKani fixes.</li>
        </UpdateEntry>
        <UpdateEntry version="3.3.2" date="2020-5-19">
          <li>
            Fixed performance issue where LipSurf would suddenly be almost
            unresponsive in certain edge cases.
          </li>
          <li>
            Made view commands (<span class="voice-cmd">view #</span> and
            <span class="voice-cmd">view [subject or message]</span>) work
            again.
          </li>
          <li><f-lbl plus /> WaniKani fixes.</li>
        </UpdateEntry>
        <UpdateEntry version="3.3.1" date="2020-4-28">
          <li>
            Improvements to fuzzy matching links with
            <span class="voice-cmd">click *</span> command.
          </li>
          <li>Improvements to grading in Duolingo and WaniKani.</li>
          <li>Made more Duolingo question types work.</li>
        </UpdateEntry>
        <UpdateEntry version="3.3.0" date="2020-4-21">
          <ul>
            <li>
              New media mode let's you control videos much more conveniently!
            </li>
            <li>
              New <span class="voice-cmd">open multiple links</span> command.
            </li>
            <li>Improved scroll commands to work in more places.</li>
            <li>
              LipSurf now automatically pauses listening while WaniKani audio is
              playing.
            </li>
            <li>
              Duolingo:
              <ul>
                <li>
                  Added support for fill in the blank type questions and others.
                </li>
                <li>Added Russian, German and Portuguese.</li>
                <li>Improved Japanese.</li>
                <li>
                  Russian Duolingo demo:
                  <div class="video-cont">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/cK6CXNUx9Is"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="3.2.0" date="2020-4-13">
          <ul>
            <li>
              Duolingo improvements.
              <ul>
                <li>Preliminary French support!</li>
                <li>Speedier reviews!</li>
                <li>
                  Automatically pause LipSurf while Duo's audio is playing.
                </li>
                <li>Support for more question types.</li>
              </ul>
            </li>
            <li>⚡ Performance improvements!</li>
            <li>Fixed bugs in Gmail.</li>
            <li>
              Fixed <span class="voice-cmd">undo</span> and
              <span class="voice-cmd">redo</span> in Google Docs.
            </li>
            <li>
              Fixed <span class="voice-cmd">select all</span> in custom
              shortcuts dialog.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="3.1.0" date="2020-4-10">
          <ul>
            <li>
              <f-lbl premium /> More accurate wake-word "Hey LipSurf" detection.
            </li>
            <li>Help sidebar improvements.</li>
            <li>Duolingo bug fixes.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="3.0.0" date="2020-4-2">
          <ul>
            <li>Improved Gmail support!</li>
            <li>
              Google Sheets support!
              <div class="video-cont">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mFkNlUgbxIQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </li>
            <li>
              Duolingo support!
              <div class="video-cont">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/pBtFl8qHgpE"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </li>
            <li>Much better contextual <span class="voice-cmd">help</span>.</li>
            <li>
              New <span class="voice-cmd">move help</span>,
              <span class="voice-cmd">scroll help down</span>,
              <span class="voice-cmd">scroll help up</span> and
              <span class="voice-cmd">don't auto open help here</span> commands.
            </li>
            <li>
              LipSurf can now understand some
              <span class="voice-cmd">Spanish</span>! ¡Entiende Español!
              (Gracias a
              <a
                href="https://discuss.lipsurf.com/t/spanish-translation-help-appreciated/136/2"
                >blindcat97</a
              >!)
            </li>
            <li>Added more Russian and Japanese commands.</li>
            <li>
              New <span class="voice-cmd">stop listening</span> command is an
              alternative to <span class="voice-cmd">sleep</span> that leaves
              tags, help and other LipSurf dialogues open while pausing speech
              recognition.
            </li>
            <li>
              <span class="voice-cmd">Auto scroll</span> now works on zoomed
              pages.
            </li>
            <li>Improved options page styling.</li>
            <li>Various bug fixes</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.13.1" date="2020-2-21">
          <ul>
            <li>Improved <span class="voice-cmd">tag</span> command.</li>
            <li>
              Fixed <span class="voice-cmd">click [text]</span> to work for more
              clickable elements.
            </li>
            <li>
              <f-lbl premium />Improved
              <span class="voice-cmd">dictate mode</span> command.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.13.0" date="2020-2-13">
          <div class="video-cont">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rO54bBFG-Dc?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <ul>
            <li>
              Improved help menu to be on the right side instead of the middle
              of the screen.
            </li>
            <li>
              New <span class="voice-cmd">add custom shortcut</span> command.
            </li>
            <li>Custom shortcut adder now completely navigable with voice.</li>
            <li>
              <f-lbl premium />New <span class="voice-cmd">spell mode</span>!
            </li>
            <li>LipSurf by default runs on new tab page (optional).</li>
            <li>
              Changing inactivity threshold while LipSurf is on now works.
            </li>
            <li>
              Context help can now be disabled in the
              <span class="voice-cmd">options</span>.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.12.0" date="2020-1-30">
          <ul>
            <li>
              <f-lbl plus />WaniKani option to toggle showing answer after 3
              incorrect answers.
            </li>
            <li>
              Improved <span class="voice-cmd">tag</span> to work in more
              places.
            </li>
            <li>
              <f-lbl premium />Improved
              <span class="voice-cmd">dictation mode</span>.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.11.0" date="2019-11-15">
          <ul>
            <li>
              <f-lbl premium />Advanced punctuation:
              <div class="video-cont">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5CsfgZychpg?rel=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </li>
            <li>Better command matching.</li>
            <li>Better smart spacing and capitalization.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.10.1" date="2019-11-8">
          <ul>
            <li>Fixed initial loading issue.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.10.0" date="2019-11-6">
          <ul>
            <li>Improved scrolling.</li>
            <li>
              Clicking options in HTML select boxes now works with
              <span class="voice-cmd">tag</span> and
              <span class="voice-cmd">click *</span>.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.9.0" date="2019-10-25">
          <ul>
            <li>Big performance improvements.</li>
            <li>
              WaniKani fixes and improvements - including better context
              switching between lessons and reviews.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.8.0" date="2019-9-27">
          <ul>
            <li>Better Outlook.com support.</li>
            <li>Better Google Sheets support.</li>
            <li>Stays in modes when changing tabs.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.7.2" date="2019-9-14">
          <ul>
            <li>
              Fixed issue with dictation in Gmail and Google Docs if hosted app
              is installed.
            </li>
            <li>Made scrolling work on Google Docs.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.7.1" date="2019-9-13">
          <ul>
            <li>
              Better <span class="voice-cmd">tag</span> and
              <span class="voice-cmd">click [link text]</span>.
            </li>
            <li>
              <span class="voice-cmd">Dictate *</span> and
              <span class="voice-cmd">dictation mode</span> now work for
              Facebook and Twitter message composition. (Thanks
              <a href="https://discuss.lipsurf.com/u/jdevi">jdevi</a>)!
            </li>
            <li>
              <span class="voice-cmd">Dictate *</span> and
              <span class="voice-cmd">dictation mode</span> now work on Amazon
              Mechanical Turk (mturk). (Thanks
              <a href="https://discuss.lipsurf.com/u/angel">angel</a>)!
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.7.0" date="2019-9-11">
          <ul>
            <li>
              New <span class="voice-cmd">uppercase</span> and
              <span class="voice-cmd">lowercase</span> commands will capitalize
              or uncapitalize your selection.
            </li>
            <li>
              <span class="voice-cmd">Tag</span> and
              <span class="voice-cmd">click [link text]</span> now work within
              iframes. (That includes Amazon Mechanical Turk (mturk) and many,
              many other sites!)
            </li>
            <li>
              Improvements to the video commands: eg.
              <span class="voice-cmd">play</span>,
              <span class="voice-cmd">pause</span> are better at finding the
              video in the browser now.
            </li>
            <li>Lots of new homophones.</li>
            <li>
              Custom text-to-speech plugin now available!
              <div class="video-cont">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/YjXvdLo--Jc?rel=0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              Please email us for access to this plugin.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.6.1" date="2019-8-30">
          <ul>
            <li>
              Fixed issue with smart spacing when replacing existing text
              selection in Gmail and Google Docs in
              <span class="voice-cmd">dictation mode</span>. (Thanks
              <a href="https://discuss.lipsurf.com/u/Steve_Peterson"
                >Steve_Peterson</a
              >)!
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.6.0" date="2019-8-28">
          <ul>
            <li>
              Spell with capital letters using
              <span class="voice-cmd">capital *</span>, or
              <span class="voice-cmd">capital letter *</span> (you can also use
              full words for better clarity eg.
              <span class="voice-cmd">capital boy</span> will write "B").
            </li>
            <li>
              Fixed issue with smart spacing in
              <span class="voice-cmd">dictation mode</span>. (Thanks
              <a href="https://discuss.lipsurf.com/u/Steve_Peterson"
                >Steve_Peterson</a
              >!)
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.5.3" date="2019-8-25">
          <ul>
            <li>Actually fixes upgrade issue.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.5.2" date="2019-8-25">
          <ul>
            <li>Fixes upgrade issue.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.5.1" date="2019-8-25">
          <ul>
            <li>
              <f-lbl premium /><span class="voice-cmd">Dictate *</span> and
              <span class="voice-cmd">dictation mode</span> now work properly on
              <a target="_blank" class="external" href="https://evernote.com"
                >Evernote</a
              >
              (thanks
              <a href="https://discuss.lipsurf.com/u/Steve_Peterson"
                >Steve_Peterson</a
              >!).
            </li>
            <li>
              <f-lbl premium />Improved Google Docs
              <span class="voice-cmd">dictation mode</span>
            </li>
            <li>
              <f-lbl premium />Better recognition of some commands (like
              <span class="voice-cmd">undo</span>) in dictation mode.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.5.0" date="2019-8-19">
          <section>
            <h4>General</h4>
            <ul>
              <li>🏎️ Performance improvements!</li>
            </ul>
          </section>
          <section>
            <h4>New Commands</h4>
            <ul>
              <li>
                Deep Gmail integration is here! 21 new Gmail commands!
                <div class="video-cont">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/o1zIHxkg2KU?rel=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </li>
              <li>New <span class="voice-cmd">select all</span> command!</li>
              <li>
                <f-lbl premium />New spelling by letters with
                <span class="voice-cmd">letter *</span>! Try saying eg.
                <span class="voice-cmd">"letter b"</span> while on a text input.
              </li>
              <li>
                New Keyboard plugin!
                <ul>
                  <li><span class="voice-cmd">Press enter</span></li>
                  <li><span class="voice-cmd">Press tab</span></li>
                  <li><span class="voice-cmd">Press down</span></li>
                  <li><span class="voice-cmd">Press up</span></li>
                  <li><span class="voice-cmd">Press left</span></li>
                  <li><span class="voice-cmd">Press right</span></li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h4>Command Improvements</h4>
            <ul>
              <li><span class="voice-cmd">click [elem]</span> improvements.</li>
              <li>More reliable <span class="voice-cmd">close help.</span></li>
              <li>
                <f-lbl plus />"鰐蟹のコンテキストを出て" (exit WaniKani mode)
                changed to <span class="voice-cmd">ノーマルモード</span>.
              </li>
              <li>
                "りーぷさーふをきって" (turn off LipSurf) changed to
                <span class="voice-cmd">おやすみなさい</span>.
              </li>
              <li>
                Removed <span class="voice-cmd">click</span> and
                <span class="voice-cmd">click #</span> from Reddit plugin to
                prevent confusion with clicking links by text. Use
                <span class="voice-cmd">visit</span> and
                <span class="voice-cmd">visit #</span> instead.
              </li>
              <li>
                Removed <span class="voice-cmd">click #</span> from Hacker News
                plugin to prevent confusion with clicking links by text. Use
                <span class="voice-cmd">visit #</span> instead.
              </li>
              <li>
                Hacker News: you can now <span class="voice-cmd">visit</span> or
                <span class="voice-cmd">upvote</span> the current post.
              </li>
              <li>
                <f-lbl premium /><span class="voice-cmd">go to URL</span>
                doesn't show slash after sites in pretty text.
              </li>
            </ul>
          </section>
        </UpdateEntry>
        <UpdateEntry version="2.4.1" date="2019-8-6">
          <ul>
            <li>
              Fixed issue with LipSurf sometimes not recognizing paid plans.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.4.0" date="2019-8-1">
          <ul>
            <li>Less eager <span class="voice-cmd">pause</span> command.</li>
            <li>
              Fixed <span class="voice-cmd">tag</span> command to update when
              page moves/changes.
            </li>
            <li>Improved <span class="voice-cmd">click [text]</span>.</li>
            <li>
              <f-lbl premium />Japanese dictation mode can do new lines with
              "<ruby
                >改行<rp>（</rp>
                <rt>かいぎょう</rt>
                <rp>）</rp> </ruby
              >".
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.3.3" date="2019-8-1">
          <ul>
            <li>Improved <span class="voice-cmd">click [text]</span>.</li>
            <li>Less eager <span class="voice-cmd">resume</span> command.</li>
            <li>Minimum version of Chrome is now specified.</li>
            <li>Now compatible with older versions of Chrome: down to 64.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.3.2" date="2019-7-26">
          <ul>
            <li>Fixed plugins not loading.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.3.1" date="2019-7-26">
          <ul>
            <li>Fixed plugins not being updated to latest.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.3.0" date="2019-7-23">
          <ul>
            <li>
              New <span class="voice-cmd">submit</span> command! It's like
              hitting enter after typing in a form (eg. search boxes).
            </li>
            <div class="video-cont">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CCH_nyJDz6c?rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <li>Fixed issue with resetting to factory defaults.</li>
            <li>
              Fixed issue where new versions of plugins were not being fetched
              after 2.0.
            </li>
            <li>
              Fixed over eagerness of
              <span class="voice-cmd">stop</span> command.
            </li>
            <li>
              <f-lbl premium />Nice text for
              <span class="voice-cmd">go to [URL]</span> and accuracy
              improvements.
            </li>
            <li>Fixed Google in Japanese.</li>
            <li>
              <f-lbl premium />(BETA) Japanese dictation mode. Added for
              Japanese:
              <ul>
                <li>
                  <span class="voice-cmd">入力モード</span>(dictation mode)
                </li>
                <li>
                  <span class="voice-cmd">ノーマルモード</span>(normal mode)
                </li>
                <li><span class="voice-cmd">タブ</span>(tab)</li>
                <li><span class="voice-cmd">スペースキー</span>(space)</li>
                <li><span class="voice-cmd">アンドゥ</span>(undo)</li>
                <li><span class="voice-cmd">リドゥ</span>(redo)</li>
              </ul>
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.2.0" date="2019-7-19">
          <ul>
            <li>
              <span class="voice-cmd">Auto scroll</span> now saves your last
              selected speed.
            </li>
            <li>Fixed scroll commands to work with PDFs</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.1.1" date="2019-7-17">
          <ul>
            <li>Fixed loading custom plugins.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.1.0" date="2019-7-17">
          <ul>
            <li>Import/export custom homophones from the options page.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.0.2" date="2019-7-12">
          <ul>
            <li>Fixed custom homophones being erased.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.0.1" date="2019-7-12">
          <ul>
            <li>Fixed default plugins not being loaded.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="2.0.0" date="2019-7-12">
          <ul>
            <li>
              Click by voice (speaking link text)! Just say
              <span class="voice-cmd">Click [link text]</span> and the button,
              link or input field will blink yellow and get clicked. If there is
              more than one matching link, all the relevant choices are given
              tags which you can then pick from using the correct tag text.
            </li>
            <div class="video-cont">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XmvCH54959A?rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <li><f-lbl premium />Improved wake-word accuracy.</li>
            <li>
              <f-lbl premium />Pausing in dictation mode now produces proper
              spacing.
            </li>
            <li>Improved performance and memory footprint.</li>
            <li>Better default homophones across the board.</li>
            <li>
              Fixed trigger-happy <span class="voice-cmd">play</span> command.
            </li>
            <li>
              Improved plugin design.
              <router-link :to="{ name: 'contact' }">Contact us</router-link> to
              have your custom plugins updated (or
              <a
                target="_blank"
                href="https://discuss.lipsurf.com/t/upgrading-to-plugins-v2/97"
                >info for developers</a
              >).
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.19.0" date="2019-5-29">
          <ul>
            <li>
              Added <span class="voice-cmd">copy</span>,
              <span class="voice-cmd">cut</span> and
              <span class="voice-cmd">paste</span> commands!
            </li>
            <li>
              <f-lbl premium />Say
              <span class="voice-cmd">normal mode</span> instead of
              <span class="voice-cmd">exit dictation mode</span> to leave
              dictation mode.
            </li>
            <li>
              <f-lbl plus />Say
              <span class="voice-cmd">normal mode</span> instead of
              <span class="voice-cmd">exit wanikani mode</span> to leave
              wanikani mode.
            </li>
            <li>
              Fixed rare bug that would sometimes cause tags to disappear
              immediately after showing.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.18.0" date="2019-5-25">
          <ul>
            <li>
              Allow for multi-line custom shortcuts (try clicking the live text
              to add a custom shortcut).
            </li>
            <li>More accurate auto scrolling to posts in Reddit.</li>
            <li>
              <f-lbl premium />Fixed <span class="voice-cmd">dictate</span> and
              <span class="voice-cmd">dictation mode</span> homophone issue.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.17.0" date="2019-5-15">
          <ul>
            <li>
              <f-lbl premium />Added <span class="voice-cmd">undo</span> (BETA)
              and <span class="voice-cmd">redo</span> (BETA) support to
              <span class="voice-cmd">dictation mode</span>.
            </li>
            <li>
              <f-lbl premium />Improved
              <span class="voice-cmd">dictation mode</span> and
              <span class="voice-cmd">dictate</span>.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.16.1" date="2019-5-11">
          <ul>
            <li>
              Fixed issue with live text and needs upgrade dialogue where they
              wouldn't show when LipSurf was restarted on the same page.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.16.0" date="2019-5-6">
          <ul>
            <li>Tutorial usability improvements.</li>
            <li>More Japanese homophones.</li>
            <li>Options show disabled plugins as faded in the sidebar.</li>
            <li>
              Better highlighting of valid commands in the live transcript.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.15.3" date="2019-5-4">
          <ul>
            <li>
              Fixed issue with being occasionally signed out when installed on
              multiple computers.
            </li>
            <li>Improved linking to options.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.15.2" date="2019-4-30">
          <ul>
            <li>More Japanese homophones.</li>
            <li>Keep context help closed if user closes it manually.</li>
            <li>Fixed issue where sometimes two context windows would show.</li>
            <li>Fixed issue with live text sometimes not appearing.</li>
            <li>Improved tutorial scrolling.</li>
            <li>Reduced size of the application.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.15.1" date="2019-4-25">
          <ul>
            <li>
              Fixed issue with tutorial automatically opening for users that
              were only updating.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.15.0" date="2019-4-25">
          <ul>
            <li>
              Overhauled tutorial. Make sure to check out the comprehensive new
              tutorial, you will likely learn something new!
            </li>
            <li>Added some Japanese WaniKani commands.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.14.3" date="2019-4-13">
          <ul>
            <li>Clearer sign in or register button in options.</li>
            <li>Fixed tutorial bugs.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.14.2" date="2019-4-13">
          <ul>
            <li>Fixed bug when upgrading.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.14.1" date="2019-4-10">
          <ul>
            <li>State data added to automatic bug reports.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.14.0" date="2019-4-5">
          <ul>
            <li>Performance improvements</li>
            <li>
              Better <span class="voice-cmd">tag</span>s (more clickable things)
            </li>
            <li>
              Better <span class="voice-cmd">dictation mode</span> offers smart
              capitalization and spacing in more places.
            </li>
            <li>
              Added <span class="voice-cmd">sleep</span> as an alternative to
              <span class="voice-cmd">turn off</span>
            </li>
            <li>
              WaniKani contexts for reviews and lessons, no more worrying about
              the wrong command being recognized in WaniKani!
            </li>
            <li>New Gmail plugin (BETA)</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.13.3" date="2019-3-20">
          <ul>
            <li>Fixed custom homosyn adder not working on sites like Gmail.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.13.2" date="2019-3-19">
          <ul>
            <li>Fixed updates issue.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.13.1" date="2019-3-19">
          <ul>
            <li>Fixed wake-word issue.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.13.0" date="2019-3-19">
          <ul>
            <li>
              New pricing!
              <ul>
                <li>
                  <f-lbl plus /> plan just for WaniKani user's at a reduced
                  price!
                </li>
                <li>
                  <f-lbl premium /> for all of the features: dictation mode,
                  wake word, go to custom URL -- all in addition to the
                  <f-lbl plus /> features!
                </li>
                <li>
                  See
                  <router-link :to="{ name: 'pricing' }"
                    >pricing page</router-link
                  >
                  for details.
                </li>
              </ul>
            </li>
            <li>
              Wake-word changed from "grasshopper" to
              <span class="voice-cmd">hey LipSurf</span>.
            </li>
            <li>Fixed Gmail scrolling.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.12.0" date="2019-3-13">
          <ul>
            <li>
              Now you can customize per-plugin settings!
              <ol>
                <li>
                  Change the default new tab page in the Tabs & Windows plugin!
                </li>
              </ol>
            </li>
            <li>
              Added <span class="voice-cmd">speed up</span> and
              <span class="voice-cmd">slow down</span> as alternatives for
              auto-scrolling faster and slower, respectively.
            </li>
            <li>
              Fixed issue with push-to-talk key not turning off on key release.
            </li>
            <li>Removed Alt as default push-to-talk key.</li>
            <li>
              Fixed issue with dictation mode being hard to exit when on free
              version.
            </li>
            <li>Added more homophones.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.11.1" date="2019-3-9">
          <ul>
            <li>
              Dictation mode improvements (works on Google Docs and more now).
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.11.0" date="2019-3-7">
          <ul>
            <li>
              <f-lbl premium />
              <span class="voice-cmd">Dictation mode</span> for long-form
              dictation.
            </li>
            <li>
              Introducing contexts!
              <ul>
                <li>
                  Certain commands are now only possible in a given context (eg.
                  <span class="voice-cmd">faster</span>/<span class="voice-cmd"
                    >slower</span
                  >
                  commands are only valid if you're in the
                  <span class="voice-cmd">auto scroll</span> context).
                </li>
                <li>
                  Contexts are entered via commands: say
                  <span class="voice-cmd">auto scroll</span> to enter the auto
                  scroll context,
                  <span class="voice-cmd">dictation mode</span> to enter the
                  long form dictation context.
                </li>
                <li>
                  Commands might be ignored in your context...
                  <ul>
                    <li>
                      In the dictation context all the normal commands are
                      ignored and <span class="voice-cmd">tab</span>,
                      <span class="voice-cmd">space</span>,
                      <span class="voice-cmd">new paragraph</span>,
                      <span class="voice-cmd">new line</span>, and
                      <span class="voice-cmd">exit dictation</span> are added.
                    </li>
                    <li>
                      In the <span class="voice-cmd">auto scroll</span> context
                      nothing is ignored, only the
                      <span class="voice-cmd">faster</span>/<span
                        class="voice-cmd"
                        >slower</span
                      >
                      commands are added.
                    </li>
                  </ul>
                </li>
                <li>
                  To exit the auto scroll context, say
                  <span class="voice-cmd">stop</span> or scroll manually. To
                  exit the dictation context say
                  <span class="voice-cmd">exit dictation</span>.
                </li>
                <li>
                  <strong
                    >NOTE: switching tabs will also exit a context.</strong
                  >
                </li>
              </ul>
            </li>
            <li>Better options page with sidebar for easier navigation.</li>
            <li>
              Split up Browser plugin into: Scrolling, TabsAndWindows, Media,
              Navigation, Dictation <f-lbl premium /> and LipSurf.
            </li>
            <li>
              Added <span class="voice-cmd">weather in *</span> as an
              alternative match pattern for the weather lookup command.
            </li>
            <li>
              Fixed <span class="voice-cmd">tag</span> and scrolling issues on
              DuckDuckGo.com.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.10.3" date="2019-2-24">
          <ul>
            <li><f-lbl premium /> Made wake-word even less sensitive.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.10.2" date="2019-2-23">
          <ul>
            <li><f-lbl premium /> Made wake-word less sensitive.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.10.1" date="2019-2-22">
          <ul>
            <li>
              Fixed issue with uh-oh page sometimes being opened after initial
              upgrade from v1.9.2
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.10.0" date="2019-2-20">
          <div class="video-cont">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5p7NEne19DM?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <ul>
            <li>
              <f-lbl premium /> Added wake-word! (It's "grasshopper" for now).
            </li>
            <li>Added push-to-talk key!</li>
            <li>
              Configurable sound effects for LipSurf activation/deactivation in
              <span class="voice-cmd">options</span>.
            </li>
            <li><f-lbl plus /> Added many homophones for WaniKani.</li>
            <li>Stability enhancements.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.9.2" date="2019-1-15">
          <ul>
            <li>Fixed issue with Japanese word splitter.</li>
            <li>
              Fixed issues with live-text getting in the way of the page at
              times.
            </li>
            <li>
              Made it more clear that page that automatically opens after
              install is the LipSurf tutorial.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.9.1" date="2019-1-12">
          <ul>
            <li>
              Updates to make all WaniKani number items properly recognized.
            </li>
            <li>Fixed issues with homophones being expanded to infinity.</li>
            <li>Don't allow blank custom homophone transcript sources.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.9.0" date="2019-1-10">
          <ul>
            <li>Fixed issues with language switching for ja/en.</li>
            <li>
              New <span class="voice-cmd">zoom in</span>,
              <span class="voice-cmd">zoom out</span> and
              <span class="voice-cmd">reset zoom</span> commands!
            </li>
            <li>
              Fixed some issues with recognizing certain vocab/kanji with
              numbers in them.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.8.2" date="2019-1-8">
          <ul>
            <li>Fixed issues with loading local plugins. Thanks Pat!</li>
            <li>Infrastructural improvements</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.8.1" date="2019-1-6">
          <ul>
            <li>
              Better microphone permission handling and troubleshooting in the
              tutorial and options.
            </li>
            <li>Fixed issue with fonts on Windows and macOS.</li>
            <li>
              More 🇷🇺 Russian translations and some fixes general language
              handling (including 🇯🇵 Japanese). Thank you
              <a target="_blank" href="https://github.com/ulalasava"
                >@ulalasava</a
              >!
            </li>
            <li>
              Fixed issues on smaller resolutions (eg.
              <span class="voice-cmd">help</span> being cut off).
            </li>
            <li>
              Fixed issue with custom shortcuts/homophones and synonyms metrics
              gathering.
            </li>
            <li>
              Warning in the tutorial for Chromium users about incompatibility.
              (Install Google Chrome instead).
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.8.0" date="2018-12-30">
          <div class="video-cont">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xkO0yji0IHY?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <ul>
            <li>
              Custom homophones/synonyms/shortcuts can now be added by clicking
              the live text!
              <ul>
                <li>
                  Quickly add a shortcut to do a
                  <span class="voice-cmd">Google ...</span> query, or activate
                  any other command of your choosing.
                </li>
                <li>
                  Map simple words to things that are hard to
                  <span class="voice-cmd">dictate ...</span>
                  <f-lbl premium /> (eg. email addresses, unpronounceable
                  usernames, random sequences of characters, etc.)
                </li>
                <li>Correct any misheard transcriptions.</li>
                <li>
                  Map commands to vocabulary that you have an easier time saying
                  or remembering.
                </li>
              </ul>
            </li>
            <li>
              New "feeling lucky" command let's you automatically go to the
              first result of a search query. Try
              <span class="voice-cmd">feeling lucky Django documentation</span>.
            </li>
            <li>Improved the <span class="void-cmd">tag</span> command.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.7.1" date="2018-12-20">
          <ul>
            <li>
              Fixed bug where saying <span class="voice-cmd">tag</span> would
              cause high CPU usage.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.7.0" date="2018-12-17">
          <ul>
            <li>
              Completely overhauled the Japanese kanji➡kana conversion (new
              dictionary download is necessary).
            </li>
            <li>Big improvements to the WaniKani <f-lbl plus /> plugin</li>
            <li>Loading icon, and language displayed in the icon.</li>
            <li>Improved language switching speed.</li>
            <li>Improved subscription modification button</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.9" date="2018-12-11">
          <ul>
            <li>
              Fixed issue that prevented sign-out and may have caused other
              authentication issues.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.8" date="2018-12-5">
          <ul>
            <li>
              Smarter deprecation logic depends on the user's previous version.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.7" date="2018-12-5">
          <ul>
            <li>Continuous deployment integration improvements.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.6" date="2018-12-5">
          <ul>
            <li>
              Fixed issue where Pro users would get repeat upgrade messages.
            </li>
            <li>Chained homophones in WaniKani <f-lbl plus /> fix.</li>
            <li>
              Temporary WaniKani <f-lbl plus /> fixes for certain characters.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.5" date="2018-12-3">
          <ul>
            <li>Hotfix to bug for brand new users in 1.6.4</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.4" date="2018-12-2">
          <ul>
            <li>Testing new release automation.</li>
            <li>Important updates show as notifications.</li>
            <li>Better error handling.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.3" date="2018-12-2">
          <ul>
            <li>Better error handling.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.2" date="2018-12-1">
          <ul>
            <li>Fixed Japanese number to digit conversion.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.1" date="2018-11-30">
          <ul>
            <li>
              Hotfix: LipSurf wouldn't turn on with certain settings
              configurations.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.6.0" date="2018-11-29">
          <ul>
            <li>
              Added lessons capability for WaniKani
              <f-lbl plus />
            </li>
            <li>
              WaniKani <f-lbl plus /> now shows fully correct answer in
              transcript even when transcript only fuzzy matched answer.
            </li>
            <li>Updates now hosted online instead of in-app.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.5.0" date="2018-11-18">
          <section style="display: flex">
            <div class="diaper" style="width: 700px">
              <video
                alt="demo of new dictionary lookup commands, including Japanese ⬌ English dictionary lookup"
                autoplay
                muted
                loop="true"
                controls
              >
                <source src="https://imgur.com/mBy3eaG.mp4" type="video/mp4" />
              </video>
            </div>
            <ul>
              <li>
                New dictionary command (try saying
                <span class="voice-cmd">dictionary "exculpate"</span>).
              </li>
              <li>
                New English ⬌ Japanese dictionary commands.
                <ul>
                  <li>
                    Try saying
                    <span class="voice-cmd">Japanese lookup "jet lag"</span> to
                    lookup an English ➡ Japanese word.
                  </li>
                  <li>
                    Switch to Japanese by saying
                    <span class="voice-cmd">Japanese</span> then try saying
                    <span class="voice-cmd">じしょたこやき</span> to lookup
                    "takoyaki" a Japanese ➡ English word.
                  </li>
                </ul>
              </li>
              <li>
                New Wikipedia command (try saying
                <span class="voice-cmd">wikipedia "John Perry"</span>).
              </li>
              <li>Fixed bug with top part of page being un-clickable.</li>
            </ul>
          </section>
          <section class="tip notice warning">
            <h4>
              <IconBase name="tip"> <img svg-inline svg-sprite src="@lipsurf/common/assets/icons/lightbulb.svg"> </IconBase>Tip of the
              Update
            </h4>
            <p>
              Remember you can say <span class="voice-cmd">Japanese</span> or
              <span class="voice-cmd">えいご</span> to switch between Japanese
              and back to English, respectively.
            </p>
          </section>
        </UpdateEntry>
        <UpdateEntry version="1.4.0" date="2018-11-16">
          <ul>
            <li>Internal improvements to Pro version.</li>
            <li>
              Added
              <router-link :to="{ name: 'privacy' }">privacy policy</router-link
              >.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.3.0" date="2018-11-7">
          <ul>
            <li>Better bug/error tracking</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.2.0" date="2018-11-2">
          <section style="display: flex">
            <div class="diaper" style="width: 700px">
              <video
                alt="demo of new dictate input text command"
                autoplay
                muted
                loop="true"
                controls
              >
                <source
                  src="https://i.imgur.com/8y78yRz.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <ul>
              <li>
                Commands in the middle of a transcript are now recognized (see
                video on the left)!
              </li>
              <li>Faster command recognition.</li>
              <li>
                New <span class="voice-cmd">scroll right</span> and
                <span class="voice-cmd">scroll left</span> commands.
              </li>
              <li>
                Smarter scroll commands look at viewport height. Thank you
                <a target="_blank" href="https://github.com/aparajita"
                  >@aparajita</a
                >!
              </li>
              <li>Live text stays on top of new tabs and pages.</li>
            </ul>
          </section>
          <section class="tip notice warning">
            <h4>
              <IconBase name="tip"><img svg-inline svg-sprite src="@lipsurf/common/assets/icons/lightbulb.svg"></IconBase> Tip of the
              Update
            </h4>
            <p>
              Remember you can say <span class="voice-cmd">options</span> or
              right click the extension icon and click "options" to see and
              configure all the possible commands.
            </p>
          </section>
        </UpdateEntry>
        <UpdateEntry version="1.1.0" date="2018-10-16">
          <ul>
            <li>New ANKI plugin!</li>
            <li>Sign-in and registration included in tutorial.</li>
            <li>Faster <span class="voice-cmd">play video</span> command.</li>
            <li>
              <span class="voice-cmd">Go to r [subreddit name]</span> is no
              longer global.
            </li>
            <li><span class="voice-cmd">Tutorial</span> command.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="1.0.0" date="2018-10-08">
          <h2>v1.0 and LipSurf Pro are finally here!</h2>
          <section>
            <h3 class="new-commands">New Commands</h3>
            <div style="display: flex; justify-content: center">
              <div class="diaper" style="flex: 1 0 0">
                <h2><f-lbl premium /> Dictate Text</h2>
                <p>
                  Quick text dictation by focusing on an input and saying
                  <span class="voice-cmd">dictate [text you want to input]</span
                  >.
                </p>
                <p>
                  Great for search boxes, short comments, or messages! You can
                  redo the dictation just by repeating the command.
                </p>
                <video
                  alt="demo of new dictate input text command"
                  autoplay
                  muted
                  loop="true"
                  controls
                >
                  <source
                    src="https://i.imgur.com/A1AQgPn.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="diaper" style="flex: 1 0 0">
                <h2><f-lbl premium /> Go to URL</h2>
                <p>
                  Go to any URL by saying
                  <span class="voice-cmd">go to [url]</span>.
                </p>
                <p>
                  You can also spell the URL if it's a really hard one. Even the
                  rarer sites are now at your finger ti— err... the tip of your
                  tongue!
                </p>
                <video
                  alt="demo of new arbitrary URL input command"
                  autoplay
                  muted
                  loop="true"
                  controls
                >
                  <source
                    src="https://i.imgur.com/6zNUjfi.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </section>
          <ul>
            <li>
              LipSurf now never starts as activated when Google Chrome opens
              (even if it was activated when the browser was shutdown last).
            </li>
            <li>
              Old <span class="voice-cmd">annotate</span> and
              <span class="voice-cmd">unannotate</span> command words added as
              alternatives to <span class="voice-cmd">tag</span> and
              <span class="voice-cmd">untag</span> respectively.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="0.11.2 " date="2018-09-26">
          <ul>
            <li>Fixed error collection.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="0.11.1 " date="2018-09-26">
          <ul>
            <li>Fixed issues with tutorial.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="0.11 " date="2018-09-26">
          <ul>
            <li>
              New "Anti-Procrastination Plugin"! Try
              <span class="voice-cmd">open Reddit for 10 seconds</span> (you can
              say "open [any website] for [any duration]")
            </li>
            <li>
              Google calendar commands! Try
              <span class="voice-cmd">add event to Google calendar</span> or
              just <span class="voice-cmd">Google calendar</span>.
            </li>
            <li>Changed default shut off time from 20m to 5m.</li>
            <li>
              Fixed issue that would occur when many tabs were open (LipSurf
              wouldn't load).
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="0.10 " date="2018-09-19">
          <ul>
            <li>Infrastructure improvements.</li>
            <li>Added BETA Russian support!</li>
            <li>Added <span class="voice-cmd">new window</span> command.</li>
            <li>Added Hacker News plugin.</li>
            <li>Improved tutorial.</li>
          </ul>
          <section>
            <h4>
              <IconBase name="tip"> <img svg-inline svg-sprite src="@lipsurf/common/assets/icons/lightbulb.svg"> </IconBase>Tip of the
              Update
            </h4>
            <p>
              Now you can say <span class="voice-cmd">tag</span> and
              <span class="voice-cmd">untag</span> instead of
              annotate/unannotate, respectively.
            </p>
          </section>
        </UpdateEntry>
        <UpdateEntry version="0.9 " date="2018-09-12">
          <div style="display: flex">
            <section>
              <img src="https://i.giphy.com/media/XreQmk7ETCak0/giphy.gif" />
            </section>
            <ul>
              <li>Improved annotations.</li>
              <li>Improved Reddit commands.</li>
              <li>Performance improvements.</li>
              <li>
                New Top Sites plugin. Try saying
                <span class="voice-cmd">youtube</span>!
              </li>
              <li>Improved Japanese recognition.</li>
              <li>
                New WaniKani plugin commands (<span class="voice-cmd"
                  >more info</span
                >, <span class="voice-cmd">last 10</span>) and added more
                homophones.
              </li>
            </ul>
          </div>
          <section class="tip notice warning">
            <h4>
              <IconBase name="tip"> <img svg-inline svg-sprite src="@lipsurf/common/assets/icons/lightbulb.svg"> </IconBase>Tip of the
              Update
            </h4>
            <p>
              We now have a forum where you can make feature requests and ask
              questions:
              <a href="https://discuss.lipsurf.com"
                >https://discuss.lipsurf.com</a
              >
            </p>
          </section>
        </UpdateEntry>
        <UpdateEntry version="0.8 " date="2018-09-06">
          <ul>
            <li>
              Added "dev mode" and button to load local plugins.
              <a href="https://docs.lipsurf.com">Make your own plugins</a>.
            </li>
            <li>Improved core design.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="0.7.1" date="2018-09-02">
          <ul>
            <li>
              Hide updates for 0.7-0.7.1 to not annoy users with too many
              updates.
            </li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="0.7" date="2018-09-02">
          <ul>
            <li>Added more English dialects.</li>
            <li>
              <i>Actually</i> fixed issue with overlapping commands in WaniKani
              specifically.
            </li>
            <li>Language picker in first page of tutorial.</li>
          </ul>
        </UpdateEntry>
        <UpdateEntry version="0.6.1" date="2018-08-31">
          <div style="display: flex">
            <img
              style="padding-right: 20px"
              src="data:image/jpeg;base64,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"
              width="30%"
              height="30%"
            />
            <section>
              <ul>
                <li>
                  Fixed issue with overlapping commands -- delaying commands
                  that are partial matches of other commands.
                </li>
                <li>Fixed issue with command priority.</li>
              </ul>
            </section>
          </div>
          <section class="tip notice warning">
            <h4>
              <IconBase name="tip"> <img svg-inline svg-sprite src="@lipsurf/common/assets/icons/lightbulb.svg"> </IconBase>Tip of the
              Update
            </h4>
            <p>
              Try using a headset for improved transcript accuracy. Apple
              headphones work quite well! If you see 3 rings on your headphone
              jack (like in the picture), that means there's a microphone.
            </p>
          </section>
        </UpdateEntry>
        <UpdateEntry version="0.6" date="2018-08-13">
          <ul>
            <li>
              Fixed issue where live text would show but commands would not be
              executed.
            </li>
            <li>
              Fixed issue where LipSurf would break after any network issue --
              sometimes caused by saying many things while LipSurf is activated.
            </li>
            <li>Fixed issue with setting auto. off timer to 0 not working.</li>
            <li>
              Added English homophones: kay ➡ k, okay ➡ ok, are ➡ r, you ➡ u
            </li>
            <li>
              Fixed issue where toggling LipSurf on WaniKani would sometimes
              cause the wrong language to be selected.
            </li>
            <li>
              Fixed issue where LipSurf would stay on if it was shutdown while
              on a Japanese reading for WaniKani.
            </li>
            <li>
              Fixed issue with recognizing WaniKani vocab/kanji with numbers.
            </li>
            <li>
              Added many default homophones for WaniKani. esp. for Romaji ➡
              Japanese.
            </li>
            <li>Fixed issue with apostrophes, hyphens in WaniKani answers.</li>
          </ul>
          <section class="tip notice warning">
            <h4>
              <IconBase name="tip"> <img svg-inline svg-sprite src="@lipsurf/common/assets/icons/lightbulb.svg"> </IconBase>Tip of the
              Update
            </h4>
            <p>
              Don't say "annotations off" say "turn off annotations" or "hide
              annotations" -- that way LipSurf doesn't jump the gun and think
              you're saying just "annotate".
            </p>
          </section>
        </UpdateEntry>
        <UpdateEntry version="0.5" date="2018-08-05">
          <section>
            <ul style="display: inline-block; vertical-align: top; margin: 0">
              <li>
                You can now spell out hard-for-the-recognizer words in WaniKani.
                <ol>
                  <li>
                    If already in English mode (answering meanings) then just
                    start spelling it out.
                  </li>
                  <li>
                    If in Japanese mode, first say "えいご" then spell the
                    reading as you would type it
                    <div class="small">
                      (eg. for しょうがつ say <i>"s-h-o-u-g-a-t-s-u"</i>)
                    </div>
                  </li>
                </ol>
              </li>
              <li>Added commands to switch between Japanese and English.</li>
              <li>Fixed bugs with general Japanese and WaniKani.</li>
            </ul>
            <section class="tip notice warning">
              <h4>
                <IconBase name="tip"> <img svg-inline svg-sprite src="@lipsurf/common/assets/icons/lightbulb.svg"> </IconBase>Tip of the
                Update
              </h4>
              <p>
                You can spell out words if LipSurf is having trouble recognizing
                you.
              </p>
              <p>Try spelling out <i>"g-o-o-g-l-e-l-i-p-s-u-r-f"</i>.</p>
            </section>
          </section>
        </UpdateEntry>
      </ol>
      <div class="support">
        <router-link :to="{ name: 'pricing' }">Support the Project</router-link>
      </div>
    </v-container>
  </BaseLayout>
</template>
<style>
.video-cont {
  text-align: center;
  margin: 1em;
}
.update-posts > li {
  border-bottom: 1px solid #ccc;
  list-style: none;
}

.update-posts > li:last-child {
  border: none;
}
</style>
<style scoped>
ol {
  margin: 1em 0;
  padding: 0;
}

li {
  padding: 10px 0;
  list-style-type: disc;
}

.small {
  font-size: 0.8em;
}

.update-posts {
  list-style: none;
}

.support {
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 50px;
}

.diaper:first-child {
  margin-left: 0px;
}
.diaper {
  margin: 15px;
}
.diaper:last-child {
  margin-right: 0px;
}

video {
  width: 100%;
}

.tip {
  padding: 15px;
  margin: 20px;
}
.tip h4 {
  margin: 0 0 0 15px;
}

.tip h4 i {
  width: 25px;
}

.tip p {
  margin: 10px;
}

.coupon {
  text-align: center;
  border: 1px solid #c4d3d7;
  background: white;
}

.new-commands {
  margin: 30px 0 0 0;
}
</style>
<script lang="ts" setup>
import BaseLayout from "./BaseLayout.vue";
import UpdateEntry from "../components/UpdateEntry.vue";
import { IconBase } from "@lipsurf/common/components";
import FLbl from "../components/FLbl.vue";

// import WakeWordUpdatesImg from '@lipsurf/common/assets/updates-wake-word.png';
</script>
